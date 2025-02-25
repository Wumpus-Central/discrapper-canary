l.d(t, { _: () => n }), l(47120);
var r = l(224706),
    i = l(594190),
    s = l(823379);
async function n() {
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
                let l = e.windowHandle,
                    i = e.name,
                    s = t.icon;
                return null != l && null != i && null != s
                    ? {
                          id: 'window:'.concat(l),
                          name: i,
                          url: 'data:image/bmp;base64,'.concat(s)
                      }
                    : null;
            })
        )
    ).filter(s.lm);
}
