n.d(t, { _: () => s }), n(47120);
var r = n(224706),
    l = n(594190),
    i = n(823379);
async function s() {
    let e = l.ZP.getRunningGames();
    return (
        await Promise.all(
            e.map(async (e) => {
                let t;
                if (null == e.name) return null;
                try {
                    t = await r.Z.identifyGame(e.pid, e.name);
                } catch (e) {
                    return null;
                }
                let n = e.windowHandle,
                    l = e.name,
                    i = t.icon;
                return null != n && null != l && null != i
                    ? {
                          id: 'window:'.concat(n),
                          name: l,
                          url: 'data:image/bmp;base64,'.concat(i)
                      }
                    : null;
            })
        )
    ).filter(i.lm);
}
