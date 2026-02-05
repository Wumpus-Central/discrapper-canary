n.d(t, { A: () => p, m: () => m }), n(321073);
var i = n(735438),
    l = n.n(i),
    a = n(835245),
    s = n(353640),
    r = n(121894),
    o = n(318937),
    c = n(533117),
    d = n(134753),
    u = n(666717),
    h = n(202894);
n(824217);
let m = (0, s.v)(() => ({ particles: {}, lastSpawned: {} }));
function A(e, t) {
    l()(m.getState().particles[e.id] ?? {}).forEach(t);
}
function p(e) {
    let t,
        n,
        {
            emojiHose: i,
            context: s,
            canvasWidth: p,
            canvasHeight: g,
            fallbackColor: f,
            outlineColorDark: _,
            outlineColorLight: E,
            streamerId: C,
            deadDrawables: x,
        } = e;
    s.save();
    let S = c.A.getEmojiImage(i.emojiId ?? i.emojiName ?? ""),
        T = (0, u._t)(i.x, p),
        I = (0, u._t)(i.y, g),
        { outlineColor: N } = (0, u.yO)(i.userId, _, E, f);
    A(i, (e) => {
        (e.x += e.xSpeed * window.devicePixelRatio),
            (e.y += e.ySpeed * window.devicePixelRatio),
            (e.opacity -= e.opacitySpeed),
            e.opacity <= 0 &&
                (0, r.r)(() => {
                    m.setState(
                        (t) => (
                            delete t.particles[i.id][e.id],
                            0 === Object.keys(t.particles[i.id]).length && delete t.particles[i.id],
                            t
                        ),
                    );
                });
    }),
        (t = m.getState().lastSpawned[i.id] ?? 0),
        t + 100 > (n = Date.now()) ||
            i.state === d.B.STOP ||
            ((0.8 >= Math.random() || t + 300 < n) &&
                (0, r.r)(() => {
                    m.setState((e) => {
                        let t = e.particles[i.id] ?? {},
                            n = l().random(1, 2);
                        for (let e = 0; e < n; e++) {
                            let e = {
                                id: (0, a.A)(),
                                x: T + l().random(-96, 96),
                                y: I + l().random(-25, 25),
                                xSpeed: l().random(-0.5, 0.5),
                                ySpeed: l().random(-1, -5),
                                opacity: 1,
                                opacitySpeed: l().random(0.01, 0.05),
                                size: l().random(24, 48),
                            };
                            t[e.id] = e;
                        }
                        return (e.particles[i.id] = t), (e.lastSpawned[i.id] = Date.now()), e;
                    });
                })),
        (0, h.y)(s, T, I, N, 3),
        (0, h.k)(s, T, I, i.userId),
        A(i, (e) =>
            (function (e, t, n) {
                if (null == t) return;
                let i = n.size * window.devicePixelRatio,
                    l = n.x - (i / 2) * window.devicePixelRatio,
                    a = n.y - 1.2 * i * window.devicePixelRatio;
                (e.globalAlpha = n.opacity), e.drawImage(t, i / 2 + l, i / 2 + a, i, i);
            })(s, S, e),
        ),
        i.lastUpdatedAt + 5e3 < Date.now() && (0, o.RB)(C, i),
        i.state !== d.B.STOP || Object.keys(m.getState().particles[i.id] ?? {}).length > 0 || x.push(i),
        s.restore();
}
