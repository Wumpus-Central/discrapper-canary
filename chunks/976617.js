e.exports = {
    option: "alt",
    command: "meta",
    return: "enter",
    escape: "esc",
    mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl",
};
