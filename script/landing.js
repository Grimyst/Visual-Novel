document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.querySelector('.cursor')
    if (!customCursor) return

    const cursorImg = customCursor.querySelector('img')
    if (!cursorImg) return

    const trailCount = 1

    document.addEventListener('mousemove', e => {
        customCursor.style.top = e.clientY + 'px'
        customCursor.style.left = e.clientX + 'px'

        for (let i = 0; i < trailCount; i += 1) {
            const trail = document.createElement('div')
            trail.className = 'cursor-trail'

            const trailImg = cursorImg.cloneNode(true)
            trail.appendChild(trailImg)

            const offsetX = Math.random() * 24 - 12
            const offsetY = Math.random() * 24 - 12
            const scale = 0.35 + Math.random() * 0.4
            const duration = 0.8 + Math.random() * 0.4
            const driftX = Math.random() * 20 - 10
            const driftY = -20 - Math.random() * 20

            trail.style.top = e.clientY + offsetY + 'px'
            trail.style.left = e.clientX + offsetX + 'px'
            trail.style.setProperty('--trail-scale', scale)
            trail.style.setProperty('--trail-duration', duration + 's')
            trail.style.setProperty('--trail-drift-x', driftX + 'px')
            trail.style.setProperty('--trail-drift-y', driftY + 'px')

            document.body.appendChild(trail)

            setTimeout(() => {
                trail.remove()
            }, duration * 1000 + 200)
        }
    })
})