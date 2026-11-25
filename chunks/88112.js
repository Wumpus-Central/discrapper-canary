(t.d(n, { fG: () => o, RX: () => h, F7: () => _, oH: () => w, aO: () => v, $0: () => f }), t(647193));
let l =
        /[\0-\x1f\x7f-\x9f\xad\u034f\u061c\u115f\u1160\u17b4\u180b-\u180e\u200b\u200c\u200e\u200f\u202a-\u202f\u2060-\u206f\u2800\u3164\ufa70-\ufad9\ufeff\uffa0\ufff0-\uffff\u{1bca0}-\u{1bca3}\u{1d173}-\u{1d17a}\u{e0000}-\u{effff}]/gu,
    a = /[\x20\xa0\u1680\u2000-\u200a\u2028\u2029\u205f\u3000~-]+/g,
    u = /[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
function r(e) {
    return e.replace(a, "-").replace(/^-+/, "").replace(/-+$/, "").replace(u, "").toLowerCase();
}
function i(e) {
    let n = r(e.replace(l, ""));
    return "" === n ? "" : r(n);
}
let s = 0;
function c(e, n) {
    return ((s += 1), { key: `channel-${s}`, name: e, view: n });
}
function p(e) {
    let n = new Set();
    return e.flatMap((e) => {
        let t = [e.name.trim(), e.id].find((e) => {
            let t = i(e);
            return "" !== t && e.length <= 100 && !n.has(t);
        });
        return null == t ? [] : (n.add(i(t)), [c(t, e.id)]);
    });
}
function f(e, n) {
    var t;
    let { personal: l, live: a, channelName: u = () => void 0, buildAppChannels: r = [] } = n,
        [s] = e.views,
        f =
            e.placed || a || null == s
                ? ((t = e.mounts),
                  {
                      activity: t.activity,
                      voiceChannel: t.voiceChannel,
                      appChannels: t.appChannels.slice(0, 5).map((e) => {
                          let { id: n, name: t, view: l } = e,
                              a = u(n) ?? t;
                          return { ...c(a, l), existing: { currentName: a, recordedName: t } };
                      }),
                  })
                : ((function (e) {
                      if (!e.some((e) => e.suggestedSurfaces.length > 0)) return null;
                      let n = (n) => e.filter((e) => e.suggestedSurfaces.includes(n));
                      return {
                          activity: n("activity")[0]?.id ?? null,
                          voiceChannel: n("voice_channel")[0]?.id ?? null,
                          appChannels: p(n("app_channel")).slice(0, 5),
                      };
                  })(e.views) ??
                  (l
                      ? { activity: s.id, voiceChannel: null, appChannels: [] }
                      : { activity: null, voiceChannel: null, appChannels: p([s]) }));
    return l
        ? { activity: f.activity ?? f.appChannels[0]?.view ?? null, voiceChannel: null, appChannels: [] }
        : a && !e.placed
          ? (function (e, n, t) {
                let [l] = n;
                if (null == l) return e;
                let a = new Set(
                        n.map((e) => {
                            let { id: n } = e;
                            return n;
                        }),
                    ),
                    u = new Set(e.appChannels.map((e) => i(C(e)))),
                    r = t.flatMap((e) => {
                        let n = i(e);
                        return "" === n || u.has(n) ? [] : (u.add(n), [c(e, a.has(e) ? e : l.id)]);
                    });
                return { ...e, appChannels: [...e.appChannels, ...r].slice(0, 5) };
            })(f, e.views, r)
          : f;
}
function o(e, n) {
    if (e.appChannels.length >= 5 || 0 === n.length) return e;
    let t = d(e),
        l =
            n.find((e) => {
                let { id: n } = e;
                return !t.has(n);
            }) ?? n[0];
    return {
        ...e,
        appChannels: [
            ...e.appChannels,
            c(
                (function (e, n) {
                    let t = new Set(n.map((e) => i(C(e))));
                    if (!t.has(i(e))) return e;
                    for (let n = 2; ; n++) {
                        let l = `${e} ${n}`;
                        if (!t.has(i(l))) return l;
                    }
                })(l.name, e.appChannels),
                l.id,
            ),
        ],
    };
}
function d(e) {
    let n = new Set(
        e.appChannels.map((e) => {
            let { view: n } = e;
            return n;
        }),
    );
    return (null != e.activity && n.add(e.activity), null != e.voiceChannel && n.add(e.voiceChannel), n);
}
function h(e, n) {
    let t = new Set(
            n.map((e) => {
                let { id: n } = e;
                return n;
            }),
        ),
        l = d(e),
        a = [...l].filter((e) => !t.has(e)),
        u = new Map(),
        r = new Set();
    for (let n of e.appChannels) {
        let e = C(n),
            t = i(e);
        "" === e
            ? u.set(n.key, "empty")
            : e.length > 100
              ? u.set(n.key, "too_long")
              : "" === t
                ? u.set(n.key, "unusable")
                : r.has(t)
                  ? u.set(n.key, "duplicate")
                  : r.add(t);
    }
    return {
        channelErrors: u,
        missingViews: a,
        unplacedViews: n.filter((e) => {
            let { id: n } = e;
            return !l.has(n);
        }),
        blocked: u.size > 0 || a.length > 0,
    };
}
function C(e) {
    let { name: n, existing: t } = e;
    return t?.recordedName ?? n.trim();
}
function v(e) {
    return {
        activity: e.activity,
        voice_channel: e.voiceChannel,
        app_channels: e.appChannels.map((e) => ({ name: C(e), view: e.view })),
    };
}
function w(e) {
    return null != e && (!e.placed || e.missingViews.length > 0);
}
function _(e, n) {
    return e.appChannels.filter((e) => !n.some((n) => n.name === i(C(e)))).length;
}
