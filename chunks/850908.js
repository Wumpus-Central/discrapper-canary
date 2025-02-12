i.d(t, { Z: () => n });
function n(e) {
    if (null != e.title && null != e.filename) {
        let t = e.filename.lastIndexOf('.'),
            i = t > 0 ? e.filename.substr(t) : '';
        return e.title + i;
    }
    return e.filename;
}
