import { createApp } from "https://unpkg.com/petite-vue?module"
function VideoPlayer() {
  return {
    $template: "#video-player-template",

    get videoLink() {
      const variants = ["airpods.mp4", "airpodspro.mp4", "powerbeatspro.mp4"]
      return variants[Math.floor(Math.random() * variants.length)]
    }
  }
}
function MenuModal() {
  return { $template: "#menu-modal-template" }
}
createApp({
  VideoPlayer,
  MenuModal,
  menuModal: false,
  toggleModal() {
    this.menuModal = !this.menuModal
  }
}).mount()
