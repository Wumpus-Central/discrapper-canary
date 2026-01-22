n.d(t, {
    A: () => g,
    m: () => p,
}),
    n(321073);
var l = n(735438),
    r = n.n(l),
    i = n(835245),
    a = n(353640),
    s = n(121894),
    o = n(318937),
    c = n(533117),
    u = n(134753),
    d = n(666717),
    f = n(202894);
n(824217);
let p = (0, a.v)(() => ({
    particles: {},
    lastSpawned: {},
}));
function b(e, t) {
    var n;
    r()(null != (n = p.getState().particles[e.id]) ? n : {}).forEach(t);
}
function g(e) {
    var t, n, l, a;
    let g,
        m,
        {
            emojiHose: h,
            context: A,
            canvasWidth: y,
            canvasHeight: _,
            fallbackColor: E,
            outlineColorDark: v,
            outlineColorLight: O,
            streamerId: x,
            deadDrawables: S,
        } = e;
    A.save();
    let N = c.A.getEmojiImage(null != (t = null != (n = h.emojiId) ? n : h.emojiName) ? t : ""),
        C = (0, d._t)(h.x, y),
        j = (0, d._t)(h.y, _),
        { outlineColor: T } = (0, d.yO)(h.userId, v, O, E);
    b(h, (e) => {
        (e.x += e.xSpeed * window.devicePixelRatio),
            (e.y += e.ySpeed * window.devicePixelRatio),
            (e.opacity -= e.opacitySpeed),
            e.opacity <= 0 &&
                (0, s.r)(() => {
                    p.setState(
                        (t) => (
                            delete t.particles[h.id][e.id],
                            0 === Object.keys(t.particles[h.id]).length && delete t.particles[h.id],
                            t
                        ),
                    );
                });
    }),
        (g = null != (l = p.getState().lastSpawned[h.id]) ? l : 0),
        g + 100 > (m = Date.now()) ||
            h.state === u.B.STOP ||
            ((0.8 >= Math.random() || g + 300 < m) &&
                (0, s.r)(() => {
                    p.setState((e) => {
                        var t;
                        let n = null != (t = e.particles[h.id]) ? t : {},
                            l = r().random(1, 2);
                        for (let e = 0; e < l; e++) {
                            let e = {
                                id: (0, i.A)(),
                                x: C + r().random(-96, 96),
                                y: j + r().random(-25, 25),
                                xSpeed: r().random(-0.5, 0.5),
                                ySpeed: r().random(-1, -5),
                                opacity: 1,
                                opacitySpeed: r().random(0.01, 0.05),
                                size: r().random(24, 48),
                            };
                            n[e.id] = e;
                        }
                        return (e.particles[h.id] = n), (e.lastSpawned[h.id] = Date.now()), e;
                    });
                })),
        (0, f.y)(A, C, j, T, 3),
        (0, f.k)(A, C, j, h.userId),
        b(h, (e) =>
            (function (e, t, n) {
                if (null == t) return;
                let l = n.size * window.devicePixelRatio,
                    r = n.x - (l / 2) * window.devicePixelRatio,
                    i = n.y - 1.2 * l * window.devicePixelRatio;
                (e.globalAlpha = n.opacity), e.drawImage(t, l / 2 + r, l / 2 + i, l, l);
            })(A, N, e),
        ),
        h.lastUpdatedAt + 5000 < Date.now() && (0, o.RB)(x, h),
        h.state !== u.B.STOP ||
            Object.keys(null != (a = p.getState().particles[h.id]) ? a : {}).length > 0 ||
            S.push(h),
        A.restore();
}
