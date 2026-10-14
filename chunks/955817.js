(n.d(t, { CF: () => d, VB: () => o, wH: () => i, xJ: () => l }), n(321073));
class i extends Error {}
function r(e) {
    let t,
        { maxActive: n, maxStarts: r, windowMs: a, maxWaiting: s } = e,
        l = [],
        o = [],
        d = new Set(),
        c = 0;
    return {
        schedule: function (e) {
            return l.length >= s
                ? Promise.reject(new i("guild event embed fetch queue is full"))
                : new Promise((i, u) => {
                      (l.push({ run: e, resolve: (e) => i(e), reject: u }),
                          (function e() {
                              null != t && (clearTimeout(t), (t = void 0));
                              let i = Date.now();
                              for (; o.length > 0 && o[0] <= i - a;) o.shift();
                              for (; c < n && o.length < r;) {
                                  let t,
                                      n = l.shift();
                                  if (null == n) break;
                                  (o.push(i), c++);
                                  try {
                                      t = n.run();
                                  } catch (e) {
                                      t = Promise.reject(e);
                                  }
                                  t.then(n.resolve, n.reject).finally(() => {
                                      (c--, e());
                                  });
                              }
                              l.length > 0 && o.length >= r && (t = setTimeout(e, o[0] + a - i));
                              let u = s - l.length;
                              for (let e of d) {
                                  if (u <= 0) break;
                                  (d.delete(e), u--, e());
                              }
                          })());
                  });
        },
        onCapacity: function (e) {
            return (d.add(e), () => d.delete(e));
        },
        reset: function () {
            (null != t && clearTimeout(t),
                (t = void 0),
                d.clear(),
                l.splice(0).forEach((e) => e.reject(new i("guild event embed fetch queue reset"))),
                o.splice(0),
                (c = 0));
        },
    };
}
let a = r({ maxActive: 4, maxStarts: 5, windowMs: 5e3, maxWaiting: 64 }),
    s = r({ maxActive: 4, maxStarts: 20, windowMs: 1e4, maxWaiting: 64 }),
    l = a.schedule,
    o = a.onCapacity,
    d = s.schedule;
