n.d(t, { b: () => s }), n(388685);
var r = n(839469),
    i = n(726985);
let a = [
        i.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        i.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        i.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
        i.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
    ],
    o = [i.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, i.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2],
    s = () => {
        let e = r.R.useField("hasSearchResults"),
            t = r.R.useField("searchResults");
        return e
            ? {
                  hideGuildOptions: ![...t].some((e) => a.includes(e)),
                  hideGlobalOption: ![...t].some((e) => o.includes(e)),
              }
            : {
                  hideGuildOptions: !1,
                  hideGlobalOption: !1,
              };
    };
