var r = n(582128),
    i = n(129230),
    a = n(324593),
    s = n(652215);
n.d(
    t,
    {},
    {
        q: function (e) {
            return r.useCallback(() => {
                let t = e;
                for (; "parent" in t && null != t.parent;) t = t.parent;
                let n = "analyticsKey" in e ? e.analyticsKey : e.key;
                null != n &&
                    i.default.track(s.HAw.UI_SETTING_INTERACTED, {
                        key: n,
                        setting_type: t.analyticsKey ?? t.key,
                        search_session_id: a.A.getSearchSessionId(),
                    });
            }, [e]);
        },
    },
);
