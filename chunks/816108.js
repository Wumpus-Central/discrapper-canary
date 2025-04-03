n.d(t, { b: () => l }), n(47120);
var r = n(839469),
    i = n(726985);
let s = [i.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, i.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2, i.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2, i.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2],
    a = [i.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, i.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2],
    l = () => {
        let { hasSearchResults: e, searchResults: t } = (0, r.E)();
        return e
            ? {
                  hideGuildOptions: ![...t].some((e) => s.includes(e)),
                  hideGlobalOption: ![...t].some((e) => a.includes(e))
              }
            : {
                  hideGuildOptions: !1,
                  hideGlobalOption: !1
              };
    };
