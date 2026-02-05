n.d(t, { Z: () => a });
class a {
    static getSiteKey(e) {
        return null != e
            ? e
            : "production" === window.GLOBAL_ENV.PROJECT_ENV
              ? "6LeYqFcqAAAAAD6iZesmNgVulsO4PkpBdr6NVG6M"
              : "6LdtfVMqAAAAAMurhtf2pDhK0oqD4eLqeQPh025y";
    }
    static loadRecaptchaScript(e, t, n) {
        if (null != document.getElementById(`recaptcha-script-${this.getSiteKey(e)}`)) {
            null != t && (n?.("recaptcha-element-exists-callback"), t());
            return;
        }
        let a = document.createElement("script");
        (a.src = `https://www.google.com/recaptcha/enterprise.js?render=${this.getSiteKey(e)}`),
            (a.id = `recaptcha-script-${this.getSiteKey(e)}`),
            (a.async = !0),
            (a.defer = !0),
            document.body.appendChild(a),
            null != t &&
                (a.onload = () => {
                    n?.("recaptcha-script-onload-callback"), t();
                });
    }
}
