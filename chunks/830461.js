n.d(t, { _: () => s }), n(388685);
var r = n(224706),
    i = n(594190),
    l = n(823379);
async function s() {
    let e = i.ZP.getRunningGames();
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
                    i = e.name,
                    l = t.icon;
                return null != n && null != i && null != l
                    ? {
                          id: 'window:'.concat(n),
                          name: i,
                          url: 'data:image/bmp;base64,'.concat(l)
                      }
                    : null;
            })
        )
    ).filter(l.lm);
}
