class AutoPause {
    constructor() {
        this.threshold = 0.25
        this.handlerIntersection = this.handlerIntersection.bind(this)
    }
    run(player) {
        this.player = player
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        })

        observer.observe(this.player.media)
    }
    handlerIntersection(entries) { // Cuando IntersectionObserver llame a handlerIntersection le va pasar una lista de entries,
                                   // estos entries son todos los objetos que estamos observando desde observer.observe
                                   // en este caso solo hay y es player.media
        const entry = entries[0]   // por eso entries[0] el primer y único elemento observado que sería player.media
        
        const isVisible = entry.intersectionRatio >= this.threshold
        if(isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
        console.log(entry)
    }
}

export default AutoPause;