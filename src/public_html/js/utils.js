
const n2f = (n) => Number(n).format(0, null, " ", ".")

const getFakeData = (len, inc = 2000, init = 0) => {
    const a = []
    let d = datetime().time() - inc * len
    for (let i = 0; i < len; i++) {
        a.push([d, init])
        d += inc
    }
    return a
}

const copy2clipboard = (text) => {
    const el = document.createElement('textarea')
    el.value = text
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}

$("body").on("click", " .copy-data-to-clipboard", function() {
    copy2clipboard($(this).attr("data-value"));
    Metro.toast.create("Data copied to clipboard!")
})
