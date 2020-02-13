import MediaPlayer from "../media-player"

class AutoPause {
    private threshold: number
    player: MediaPlayer
    constructor() {
        this.threshold = 0.35
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
    }
    run(player: MediaPlayer) {
        this.player = player
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        })

        observer.observe(this.player.media)
        document.addEventListener("visibilitychange", this.handlerVisibilityChange)
    }

    private handlerIntersection(entries: IntersectionObserverEntry) { // Cuando IntersectionObserver llame a handlerIntersection le va pasar una lista de entries,
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

    private handlerVisibilityChange() {
        const isVisible = document.visibilityState === "visible"
        isVisible? this.player.play() : this.player.pause()
    }
}

export default AutoPause;