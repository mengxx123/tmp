class Canvasx {

    constructor(canvas, opts) {
        this.width = opts.width || 500
        this.height = opts.height || 500

        // canvas.style.w

        function isPointInNode(pt, node) {
            return pt.x >= node._x && pt.y >= node._y && pt.x <= node._x + node._width && pt.y <= node._y + node._height
        }

        let ctx = canvas.getContext('2d')

        ctx.globalCompositeOperation = 'lighter'

        function reDraw() {
            ctx.clearRect(0, 0, 800, 500)
            for (let node of nodes) {
                node.draw(ctx)
                // if (node.type === 'circle') {
                // }
                // if (node.type === 'image') {
                //     let img = new Image()
                //     img.onload = () => {
                //         ctx.beginPath()
                //         ctx.drawImage(img, 0, 0, img.width, img.height, node._x, node._y, 100, 100)
                //     }
                //     img.src = node.src
                // }
                ctx.beginPath()
                ctx.strokeStyle = node._hover ? '#f00' : '#000'
                ctx.rect(node._x, node._y, node._width, node._height)
                ctx.stroke()
            }
        }

        reDraw()

        let downNode
        let isDown = false
        let downState = {

        }

        canvas.addEventListener('mousedown', e => {
            let x = e.pageX
            let y = e.pageY
            let downPt = {
                x,
                y,
            }
            // console.log('downPt', downPt)
            // nodes.push({
            //     type: 'circle',
            //     x,
            //     y,
            // })
            for (let node of nodes) {
                if (isPointInNode(downPt, node)) {
                    // alert(1)
                    node._down = true
                    // hasHoverOneNode = true
                    downNode = node
                    isDown = true
                    downState = {
                        downPt,
                        downX: node._x,
                        downY: node._y,
                    }
                } else {
                    node._down = false
                }
            }

            // reDraw()
        })

        canvas.addEventListener('mousemove', e => {
            let x = e.pageX
            let y = e.pageY
            let movePt = {
                x,
                y,
            }
            if (isDown) {
                downNode._x = downState.downX + movePt.x - downState.downPt.x
                downNode._y = downState.downY + movePt.y - downState.downPt.y
            }

            console.log('movePt', movePt)

            let hasHoverOneNode = false
            for (let node of nodes) {
                if (node.moveable && isPointInNode(movePt, node)) {
                    // alert(1)
                    node._hover = true
                    hasHoverOneNode = true
                } else {
                    node._hover = false
                }
            }
            canvas.style.cursor = hasHoverOneNode ? 'move' : 'default'
            reDraw()
        })

        canvas.addEventListener('mouseup', e => {
            isDown = false
            reDraw()
        })
    }
}

window.Canvasx = Canvasx