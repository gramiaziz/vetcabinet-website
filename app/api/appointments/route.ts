import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const url = process.env.SHEETS_WEBHOOK_URL; // server-only env

    if (!url) {
      return NextResponse.json({ ok: false, error: "Missing SHEETS_WEBHOOK_URL" }, { status: 500 });
    }

    const data = await req.json();

    const body = new URLSearchParams({
      name: data.name ?? "",
      email: data.email ?? "",
      phone: data.phone ?? "",
      petType: data.petType ?? "",
      petName: data.petName ?? "",
      appointmentDate: data.appointmentDate ?? "",
      appointmentTime: data.appointmentTime ?? "",
      message: data.message ?? "",
      currentLanguage: data.currentLanguage ?? "",
    });

    const res = await fetch(url, { method: "POST", body });
    const text = await res.text();

    // Apps Script sometimes returns text; try JSON, fallback
    let json: any;
    try { json = JSON.parse(text); } catch { json = { ok: true, raw: text }; }

    return NextResponse.json({ ok: true, sheets: json });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
