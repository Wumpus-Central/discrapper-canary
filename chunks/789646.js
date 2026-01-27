n.d(t, {
    Mg: () => s,
    RZ: () => c,
}),
    n(65821),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(403362);
let a = i.createContext(void 0);

function s() {
    let e = i.useContext(a);
    if (null == e) throw Error("No PollFocusContextProvider found");
    return e;
}

function o(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: l, manageFocusOnAction: s } = e,
        o = i.useMemo(
            () => ({
                actionButtonRef: n,
                pollAnswerRef: l,
                manageFocusOnAction: s,
            }),
            [n, l, s],
        );
    return (0, r.jsx)(a.Provider, {
        value: o,
        children: t,
    });
}

function c(e) {
    let { children: t } = e,
        [n, a] = i.useState(),
        s = i.useRef(null),
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            var e, t, r;
            "POLL_ANSWERS" === n && null != c.current && (null == (t = c.current) || null == (e = t.ref) || e.focus()),
                "ACTION_BUTTON" === n && null != s.current && (null == (r = s.current) || r.focus());
        }, [n]),
        (0, r.jsx)(o, {
            pollAnswerRef: c,
            actionButtonRef: s,
            manageFocusOnAction: (e) => {
                switch (e) {
                    case "submit":
                    case "cancel":
                        a("ACTION_BUTTON");
                        break;
                    case "remove":
                    case "showVotes":
                        a("POLL_ANSWERS");
                        break;
                    case "showVoterDetails":
                        break;
                    default:
                        (0, l.xb)(e);
                }
            },
            children: t,
        })
    );
}
