i.d(t, { Selfie: () => p });
var r = i(248702),
    n = i(899656),
    o = i(458741),
    a = i(321724),
    s = i(988680),
    l = i(970316),
    c = i(868282),
    d = i(835385),
    u = !1,
    h = ({ config: e, manager: t, onFinish: o, onError: c }) => {
        (0, r._)(() => {
            u || ((u = !0), i.e("29585").then(i.bind(i, 10632)));
        }, []);
        let [h, p] = (0, n.o)(
            () => {
                if (t) return t;
                if (!e) throw Error("Selfie config is required when no manager is provided");
                return (0, d.y6)({ config: e });
            },
            { manageLifecycle: !t },
        );
        return "idle" === h.status || "loading" === h.status
            ? (0, r.v)(a.t, { hideText: !0 })
            : "tutorial" === h.status
              ? (0, r.v)(l.t, { manager: p, ageAssurance: h.ageAssurance })
              : "permissions" === h.status
                ? (0, r.v)(l.r, { manager: p, permissionStatus: h.permissionStatus })
                : "capture" === h.status
                  ? (0, r.v)(l.n, { manager: p, state: h })
                  : "processing" === h.status
                    ? (0, r.v)(s.t, {})
                    : ("finished" === h.status
                          ? o?.()
                          : "closed" === h.status
                            ? c?.(void 0)
                            : "error" === h.status && c?.(h.error),
                      null);
    },
    p = ({ config: e, manager: t, onFinish: i, onError: n }) =>
        (0, r.v)(o.t, { children: e || t ? (0, r.v)(h, { config: e, manager: t, onFinish: i, onError: n }) : null });
(0, c.t)(p, "incode-selfie");
