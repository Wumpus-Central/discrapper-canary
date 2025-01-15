n.d(t, {
    b: function () {
        return l;
    }
}),
    n(47120);
var i = n(839469),
    s = n(726985);
let r = [s.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, s.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2, s.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2, s.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2],
    a = [s.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, s.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2],
    l = () => {
        let { hasSearchResults: e, searchResults: t } = (0, i.E)();
        if (!e)
            return {
                hideGuildOptions: !1,
                hideGlobalOption: !1
            };
        let n = [...t].some((e) => r.includes(e));
        return {
            hideGuildOptions: !n,
            hideGlobalOption: ![...t].some((e) => a.includes(e))
        };
    };
