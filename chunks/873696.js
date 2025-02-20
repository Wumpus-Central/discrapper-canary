n.d(t, { D: () => i });
var r = n(388032);
function i(e) {
    if (null == e) return null;
    switch (e.type) {
        case 'embedded-activities':
        case 'event':
            return { subtitle: e.name };
        case 'go-live':
            return { subtitle: r.NW.string(r.t.Pa817u) };
    }
    return null;
}
