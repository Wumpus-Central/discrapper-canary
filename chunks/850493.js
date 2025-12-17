n.d(t, { o: () => c }), n(388685);
var r = n(473749),
    i = n(442837),
    l = n(701190),
    a = n(863249),
    o = n(937111),
    s = n(981631);
function c(e) {
    let [t, n] = r.useState(!0),
        c = (0, i.e7)([o.Z], () => (null != e ? o.Z.getJoinRequestGuild(e) : void 0)),
        u = r.useCallback(async (e) => {
            try {
                let t = l.Z.getInviteKeyForGuildId(e);
                null != t && (await a.ZP.fetchVerificationForm(e, t));
            } finally {
                n(!1);
            }
        }, []);
    return (
        r.useEffect(() => {
            null == e ? n(!1) : (n(!0), u(e));
        }, [e, u]),
        {
            canReapply: null != c && c.features.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
            isLoading: t,
        }
    );
}
