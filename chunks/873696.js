n.d(t, { D: () => l });
var i = n(388032);
function l(e) {
    if (null == e) return null;
    switch (e.type) {
        case 'embedded-activities':
        case 'event':
            return { subtitle: e.name };
        case 'go-live':
            return { subtitle: i.intl.string(i.t.Pa817u) };
    }
    return null;
}
