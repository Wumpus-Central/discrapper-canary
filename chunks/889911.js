n.d(t, { Z: () => a });
var r = n(433517),
    i = n(981631);
function a(e, t) {
    if (0 === e.length) return 'No logs';
    let n = r.K.get(i.JkL),
        a = r.K.get(i.scU),
        o = null != n ? 'Device Token: '.concat(n) : '',
        s = null != a ? 'Device Voip Token: '.concat(a) : '',
        l = e
            .map((e) => {
                let n = e.silent ? 'Silent' : 'Displayed',
                    r = t ? ''.concat(e.channelId, ' - ').concat(e.messageId) : ''.concat(e.title, ' - ').concat(e.content);
                return ''.concat(new Date(e.receivedTimestamp).toISOString(), ' [').concat(e.type, '] ').concat(n, ' - ').concat(r);
            })
            .join('\n');
    return ''.concat(o, '\n').concat(s, '\n\n').concat(l);
}
