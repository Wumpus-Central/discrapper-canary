n.d(t, {
    a: () => s,
});
var r = n(626584),
    i = n(837921);
let a = new r.A("cleanupUnusedVoiceFilterFiles");
async function s(e) {
    try {
        let { deletedFiles: t, errors: n } = await i.Ay.cleanupUnusedVoiceFilterFiles(e);
        t.length > 0 &&
            a.info("VF cleanup completed", {
                deletedFiles: t,
            }),
            n.length > 0 &&
                a.warn("VF cleanup had errors", {
                    errors: n,
                });
    } catch (e) {
        a.warn("VF cleanup failed", {
            error: e,
        });
    }
}
