function a(t, ...e) {
    let _ = new String(String.raw(t, ...e));
    return (
        (_.__sentry_template_string__ = t.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s")),
        (_.__sentry_template_values__ = e),
        _
    );
}
_.d(e, { X: () => a });
