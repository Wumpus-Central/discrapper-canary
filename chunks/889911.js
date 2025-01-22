r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(433517),
    a = r(981631);
function o(e, n) {
    if (0 === e.length) return 'No logs';
    let r = i.K.get(a.JkL),
        o = i.K.get(a.scU),
        s = null != r ? 'Device Token: '.concat(r) : '',
        l = null != o ? 'Device Voip Token: '.concat(o) : '',
        u = e
            .map((e) => {
                let r = e.silent ? 'Silent' : 'Displayed',
                    i = n ? ''.concat(e.channelId, ' - ').concat(e.messageId) : ''.concat(e.title, ' - ').concat(e.content);
                return ''.concat(new Date(e.receivedTimestamp).toISOString(), ' [').concat(e.type, '] ').concat(r, ' - ').concat(i);
            })
            .join('\n');
    return ''.concat(s, '\n').concat(l, '\n\n').concat(u);
}
