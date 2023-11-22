// Drawing constants
const GREY_40_PC = "hsl(0,0%,40%)"
const GREY_15_PC = "hsl(0,0%,15%)"

const BLACK_0_PC = "hsl(0,0%,0%)";
const WHITE_100_PC = "hsl(0,0%,100%)";

const WHITE_75_PC = "hsl(0,0%,75%)";
const YELLOW_75_PC = "hsl(60, 100%, 37%)"
const CYAN_75_PC = "hsl(180, 100%, 37%)"
const GREEN_75_PC = "hsl(120, 100%, 37%)"
const MAGENTA_75_PC = "hsl(300, 100%, 37%)"
const RED_75_PC = "hsl(0, 100%, 37%)"
const BLUE_75_PC = "hsl(240, 100%, 37%)"

const CYAN_100_PC = "hsl(180, 100%, 50%)"
const YELLOW_100_PC = "hsl(60, 100%, 50%)"
const RED_100_PC = "hsl(0, 100%, 50%)"
const BLUE_100_PC = "hsl(240, 100%, 50%)"
const PLUS_I = "rgb(0,63,105)"
const PLUS_Q = "rgb(65,0,119)"

const BLACK_MINUS_2_PC = "hsl(0,0,-2%)"
const BLACK_2_PC = "hsl(0,0,2%)"
const BLACK_4_PC = "hsl(0,0,4%)"

let is_running = false
const FRAME_BASE = 50


function drawBars(ctx) {
    const ONE_TWELFTH_H = ctx.canvas.height / 12.0
    const GREY_BAR_WIDTH = ctx.canvas.width * 0.25 * 0.5

    const COLOUR_BARS_HEIGHT = ONE_TWELFTH_H * 7
    const COLOUR_BAR_WIDTH = (ctx.canvas.width - (GREY_BAR_WIDTH * 2)) / 7.0
    const BLACK_BTTM_BAR_LARGE_WIDTH = COLOUR_BAR_WIDTH * 3 / 2
    const BLACK_BTTM_BAR_SMALL_WIDTH = COLOUR_BAR_WIDTH * 5 / 6
    const WHITE_BTTM_BAR_WIDTH = COLOUR_BAR_WIDTH * 2
    const ONE_THIRD_COLOUR_BAR_WIDTH = COLOUR_BAR_WIDTH * 1 / 3

    /** Top row - grey bars L&R, colour bars in centre */

    // Grey bars L+R
    ctx.fillStyle = GREY_40_PC
    ctx.fillRect(0, 0, GREY_BAR_WIDTH, COLOUR_BARS_HEIGHT)
    ctx.fillRect(ctx.canvas.width - GREY_BAR_WIDTH, 0, GREY_BAR_WIDTH, COLOUR_BARS_HEIGHT)

    // White 75% bar
    ctx.fillStyle = WHITE_75_PC
    ctx.fillRect(GREY_BAR_WIDTH, 0, COLOUR_BAR_WIDTH, COLOUR_BARS_HEIGHT)

    // Yellow 75% bar
    ctx.fillStyle = YELLOW_75_PC
    ctx.fillRect(GREY_BAR_WIDTH + COLOUR_BAR_WIDTH, 0, COLOUR_BAR_WIDTH, COLOUR_BARS_HEIGHT)

    // Cyan 75% bar
    ctx.fillStyle = CYAN_75_PC
    ctx.fillRect(GREY_BAR_WIDTH + COLOUR_BAR_WIDTH * 2, 0, COLOUR_BAR_WIDTH, COLOUR_BARS_HEIGHT)

    // Green 75% bar
    ctx.fillStyle = GREEN_75_PC
    ctx.fillRect(GREY_BAR_WIDTH + COLOUR_BAR_WIDTH * 3, 0, COLOUR_BAR_WIDTH, COLOUR_BARS_HEIGHT)

    // Magenta 75% bar
    ctx.fillStyle = MAGENTA_75_PC
    ctx.fillRect(GREY_BAR_WIDTH + COLOUR_BAR_WIDTH * 4, 0, COLOUR_BAR_WIDTH, COLOUR_BARS_HEIGHT)

    // Red 75% bar
    ctx.fillStyle = RED_75_PC
    ctx.fillRect(GREY_BAR_WIDTH + COLOUR_BAR_WIDTH * 5, 0, COLOUR_BAR_WIDTH, COLOUR_BARS_HEIGHT)

    // Blue 75% bar
    ctx.fillStyle = BLUE_75_PC
    ctx.fillRect(GREY_BAR_WIDTH + COLOUR_BAR_WIDTH * 6, 0, COLOUR_BAR_WIDTH, COLOUR_BARS_HEIGHT)

    /** Middle row - 100% colour blocks + ramps */
    // Cyan block
    ctx.fillStyle = CYAN_100_PC
    ctx.fillRect(0, COLOUR_BARS_HEIGHT, GREY_BAR_WIDTH, ONE_TWELFTH_H)

    // Blue block
    ctx.fillStyle = BLUE_100_PC
    ctx.fillRect(ctx.canvas.width - GREY_BAR_WIDTH, COLOUR_BARS_HEIGHT, GREY_BAR_WIDTH, ONE_TWELFTH_H)

    // Yellow block
    ctx.fillStyle = YELLOW_100_PC
    ctx.fillRect(0, COLOUR_BARS_HEIGHT + ONE_TWELFTH_H, GREY_BAR_WIDTH, ONE_TWELFTH_H)

    // Red block
    ctx.fillStyle = RED_100_PC
    ctx.fillRect(ctx.canvas.width - GREY_BAR_WIDTH, COLOUR_BARS_HEIGHT + ONE_TWELFTH_H, GREY_BAR_WIDTH, ONE_TWELFTH_H)

    // +I block
    ctx.fillStyle = PLUS_I
    ctx.fillRect(GREY_BAR_WIDTH, COLOUR_BARS_HEIGHT, COLOUR_BAR_WIDTH, ONE_TWELFTH_H)

    // +Q block
    ctx.fillStyle = PLUS_Q
    ctx.fillRect(GREY_BAR_WIDTH, COLOUR_BARS_HEIGHT + ONE_TWELFTH_H, COLOUR_BAR_WIDTH, ONE_TWELFTH_H)

    // Luma ramp
    const y_ramp_grad = ctx.createLinearGradient(GREY_BAR_WIDTH + COLOUR_BAR_WIDTH, 0, COLOUR_BAR_WIDTH * 6, 0)
    y_ramp_grad.addColorStop(0, BLACK_0_PC)
    y_ramp_grad.addColorStop(1, WHITE_100_PC)
    ctx.fillStyle = y_ramp_grad
    ctx.fillRect(GREY_BAR_WIDTH + COLOUR_BAR_WIDTH, COLOUR_BARS_HEIGHT + ONE_TWELFTH_H, COLOUR_BAR_WIDTH * 6, ONE_TWELFTH_H)

    // 75% white block
    ctx.fillStyle = WHITE_75_PC
    ctx.fillRect(GREY_BAR_WIDTH + COLOUR_BAR_WIDTH, COLOUR_BARS_HEIGHT, COLOUR_BAR_WIDTH * 6, ONE_TWELFTH_H)

    /** Bottom Row */
    // 15% Grey block
    ctx.fillStyle = GREY_15_PC
    ctx.fillRect(0, COLOUR_BARS_HEIGHT + (ONE_TWELFTH_H * 2), GREY_BAR_WIDTH, ONE_TWELFTH_H * 3)

    // Large black block
    ctx.fillStyle = BLACK_0_PC
    ctx.fillRect(GREY_BAR_WIDTH, COLOUR_BARS_HEIGHT + (ONE_TWELFTH_H * 2), BLACK_BTTM_BAR_LARGE_WIDTH, ONE_TWELFTH_H * 3)

    // White block
    ctx.fillStyle = WHITE_100_PC
    ctx.fillRect(GREY_BAR_WIDTH + BLACK_BTTM_BAR_LARGE_WIDTH, COLOUR_BARS_HEIGHT + (ONE_TWELFTH_H * 2), WHITE_BTTM_BAR_WIDTH, ONE_TWELFTH_H * 3)

    // Small black block
    ctx.fillStyle = BLACK_0_PC
    ctx.fillRect(GREY_BAR_WIDTH + BLACK_BTTM_BAR_LARGE_WIDTH + WHITE_BTTM_BAR_WIDTH, COLOUR_BARS_HEIGHT + (ONE_TWELFTH_H * 2), BLACK_BTTM_BAR_SMALL_WIDTH, ONE_TWELFTH_H * 3)

    // -2%
    ctx.fillStyle = BLACK_MINUS_2_PC
    ctx.fillRect(GREY_BAR_WIDTH + BLACK_BTTM_BAR_LARGE_WIDTH + WHITE_BTTM_BAR_WIDTH + BLACK_BTTM_BAR_SMALL_WIDTH, COLOUR_BARS_HEIGHT + (ONE_TWELFTH_H * 2), ONE_THIRD_COLOUR_BAR_WIDTH, ONE_TWELFTH_H * 3)

    // 0%
    ctx.fillStyle = BLACK_0_PC
    ctx.fillRect(GREY_BAR_WIDTH + BLACK_BTTM_BAR_LARGE_WIDTH + WHITE_BTTM_BAR_WIDTH + BLACK_BTTM_BAR_SMALL_WIDTH + ONE_THIRD_COLOUR_BAR_WIDTH, COLOUR_BARS_HEIGHT + (ONE_TWELFTH_H * 2), ONE_THIRD_COLOUR_BAR_WIDTH, ONE_TWELFTH_H * 3)

    // 2%
    ctx.fillStyle = BLACK_2_PC
    ctx.fillRect(GREY_BAR_WIDTH + BLACK_BTTM_BAR_LARGE_WIDTH + WHITE_BTTM_BAR_WIDTH + BLACK_BTTM_BAR_SMALL_WIDTH + (ONE_THIRD_COLOUR_BAR_WIDTH * 2), COLOUR_BARS_HEIGHT + (ONE_TWELFTH_H * 2), ONE_THIRD_COLOUR_BAR_WIDTH, ONE_TWELFTH_H * 3)

    // 0%
    ctx.fillStyle = BLACK_0_PC
    ctx.fillRect(GREY_BAR_WIDTH + BLACK_BTTM_BAR_LARGE_WIDTH + WHITE_BTTM_BAR_WIDTH + BLACK_BTTM_BAR_SMALL_WIDTH + (ONE_THIRD_COLOUR_BAR_WIDTH * 3), COLOUR_BARS_HEIGHT + (ONE_TWELFTH_H * 2), ONE_THIRD_COLOUR_BAR_WIDTH, ONE_TWELFTH_H * 3)

    // 4%
    ctx.fillStyle = BLACK_4_PC
    ctx.fillRect(GREY_BAR_WIDTH + BLACK_BTTM_BAR_LARGE_WIDTH + WHITE_BTTM_BAR_WIDTH + BLACK_BTTM_BAR_SMALL_WIDTH + (ONE_THIRD_COLOUR_BAR_WIDTH * 4), COLOUR_BARS_HEIGHT + (ONE_TWELFTH_H * 2), ONE_THIRD_COLOUR_BAR_WIDTH, ONE_TWELFTH_H * 3)

    // 0%
    ctx.fillStyle = BLACK_4_PC
    ctx.fillRect(GREY_BAR_WIDTH + BLACK_BTTM_BAR_LARGE_WIDTH + WHITE_BTTM_BAR_WIDTH + BLACK_BTTM_BAR_SMALL_WIDTH + (ONE_THIRD_COLOUR_BAR_WIDTH * 5), COLOUR_BARS_HEIGHT + (ONE_TWELFTH_H * 2), COLOUR_BAR_WIDTH, ONE_TWELFTH_H * 3)

    // 15%
    ctx.fillStyle = GREY_15_PC
    ctx.fillRect(GREY_BAR_WIDTH + BLACK_BTTM_BAR_LARGE_WIDTH + WHITE_BTTM_BAR_WIDTH + BLACK_BTTM_BAR_SMALL_WIDTH + (ONE_THIRD_COLOUR_BAR_WIDTH * 5) + COLOUR_BAR_WIDTH, COLOUR_BARS_HEIGHT + (ONE_TWELFTH_H * 2), GREY_BAR_WIDTH, ONE_TWELFTH_H * 3)

}


function drawRect(ctx, frame_no) {
    const ONE_TWELFTH_H = ctx.canvas.height / 12.0

    // Rect bottom position: half of the canvas - 1/12
    // Rect top position: half of the canvas - 3/12

    ctx.fillStyle = WHITE_100_PC
    const rect_offset_btm = ((ctx.canvas.height - (ctx.canvas.height / 5)) / 2) - ONE_TWELFTH_H
    const rect_offset_top = rect_offset_btm - (ONE_TWELFTH_H * 3)
    const rect_offset = frame_no < FRAME_BASE ? (rect_offset_btm - rect_offset_top) * ((frame_no * 2) / FRAME_BASE) : (rect_offset_top - (rect_offset_btm - rect_offset_top)) * ((frame_no / FRAME_BASE) - 1)

    // if (frame_no / FRAME_BASE > 1) { console.log(frame_no / FRAME_BASE - 1) }
    // const rect_offset = frame_no / FRAME_BASE < 0.5 ? rect_offset_btm - (frame_no / FRAME_BASE * 2) : rect_offset_btm + (frame_no / FRAME_BASE * 2)
    ctx.fillRect((ctx.canvas.width - (ctx.canvas.width / 5)) / 2, rect_offset_btm, ctx.canvas.width / 5, ctx.canvas.height / 5)
}

function generateFrame(frame_no) {
    const canvas = document.getElementById("generator")
    const ctx = canvas.getContext("2d")
    if (!ctx) { throw Error("No canvas context acquired!") }

    drawBars(ctx)
    drawRect(ctx, frame_no)
    if (is_running) {
        window.requestAnimationFrame(() => generateFrame(frame_no == FRAME_BASE * 2 ? 1 : frame_no + 1))
    }

}

function start_loop() {
    is_running = true
    generateFrame(1)
}

window.addEventListener("load", () => {
    const btn = document.getElementById("generate")
    btn.addEventListener("click", () => start_loop())
    // btn.addEventListener("click", () => generateFrame())
    start_loop()
})