n.d(t, {
    g: () => l,
});
var i = n(562465),
    r = n(652215);

function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT;
    i.Bo.post({
        url: r.Rsh.FORCE_SEND_PROMPT(e),
        body: {
            prompt_type: t,
        },
        rejectWithError: !0,
    });
}
