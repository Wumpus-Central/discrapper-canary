n.d(t, { Z: () => o });
var r = n(433517),
    i = n(981631);
function o(e, t) {
    if (0 === e.length) return 'No logs';
    let n = r.K.get(i.JkL),
        o = r.K.get(i.scU),
        a = null != n ? 'Device Token: '.concat(n) : '',
        s = null != o ? 'Device Voip Token: '.concat(o) : '',
        l = e
            .map((e) => {
                let n = e.silent ? 'Silent' : 'Displayed',
                    r = t ? ''.concat(e.channelId, ' - ').concat(e.messageId) : ''.concat(e.title, ' - ').concat(e.content);
                return ''.concat(new Date(e.receivedTimestamp).toISOString(), ' [').concat(e.type, '] ').concat(n, ' - ').concat(r);
            })
            .join('\n');
    return ''.concat(a, '\n').concat(s, '\n\n').concat(l);
}
