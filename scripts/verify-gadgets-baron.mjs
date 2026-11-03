import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const read = (p) => readFileSync(p, "utf8");
const constants = read("src/features/invoice/constants.ts");
const layout = read("src/app/layout.tsx");
const login = read("src/features/security/access-portal.tsx");
const header = read("src/features/invoice/renderers/html/invoice-header.tsx");
const pdf = read("src/features/invoice/renderers/pdf/sapphire-pdf-document.tsx");
const ledgerPdf = read("src/features/invoice/templates/classic-ledger/pdf/classic-ledger-pdf-document.tsx");
const gallery = read("src/features/invoice/template-gallery/template-gallery.tsx");
const numbering = read("src/features/invoice/templates/classic-receipt/lib/receipt-numbering.ts");
const pin = read("src/features/security/pin.ts");
const exportAdapter = read("src/features/invoice/lib/export-adapter.ts");
const theme = read("src/features/invoice/lib/template-theme.ts");

assert.match(constants, /COMPANY_DOCUMENT_PREFIX = "GBT"/);
assert.match(constants, /name: "Gadgets Baron & Technology"/);
assert.match(constants, /rcNo: "8752458"/);
assert.match(numbering, /RECEIPT_DOCUMENT_PREFIX = "GBT"/);
assert.match(numbering, /\^GBT-/);
assert.match(layout, /Gadgets Baron/);
assert.match(login, /GadgetsBaron.png/);
assert.match(header, /Gadgets Baron/);
assert.match(pdf, /Gadgets Baron/);
assert.match(ledgerPdf, /GADGETS BARON/);
assert.match(gallery, /Gadgets Baron/);
assert.match(theme, /#FF5232/);
assert.match(exportAdapter, /Gadgets_Baron_Invoice/);
const hashParts = [...pin.matchAll(/"([0-9a-f]{8})"/g)].map((m) => m[1]).join("");
assert.equal(hashParts.length, 64);
assert.equal(hashParts, "7bd341f08056de72d77d24aa5bc681dcb485b628df4fd03179e30ee2bc01f097");
for (const path of [
  "public/GadgetsBaron.png",
  "public/GadgetsBaronIcon.png",
  "public/branding/classic-ledger/ledger-header.png",
  "public/branding/classic-receipt/receipt-header.png"
]) assert.ok(existsSync(path), "Missing brand asset: " + path);
for (const value of [constants, layout, login, header, pdf, ledgerPdf, gallery, exportAdapter]) {
  assert.doesNotMatch(value, /Sapphire Quest|sapphirequesttravel|Travel & Tours Ltd|SQ-00128/);
}
console.log("Gadgets Baron branding and source verification: PASS");
