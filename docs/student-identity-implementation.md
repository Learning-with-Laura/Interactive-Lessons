# Learning with Laura — Student identity implementation

Status: NOT DEPLOYED. Do not use this document as evidence that student authentication is secure.

## Required design
- Teacher signs in through Google; verify teacher UID or custom claim in Firestore security rules, not just in JavaScript.
- Student has a unique internal Firebase Auth UID, public-facing username such as DanielS, and a teacher-visible display name.
- Do not assume anonymous Auth records belong to students. Never relabel an existing UID without confirming ownership.
- Do not store student passwords in Firestore, GitHub or browser local storage.
- First-time student account claiming requires a single-use invitation provisioned by the teacher and verified by a trusted backend. A username alone must not allow registration.
- Email-free student login requires a trusted backend or carefully implemented internal identifier mapping; never expose an internal email/credential convention as a substitute for authorization.
- Store student profiles in a private Firestore collection keyed by UID, with username uniqueness enforced server-side.
- Store lesson content separately from responses, keyed by student UID and lesson ID. Preserve historical response documents and revisions.
- Security rules: teacher role can read student profiles and responses; student UID can read/write only their own responses; deny other access. Teacher role must be assigned securely, not self-declared in a profile.
- Verify with Firebase emulator tests: unauthorized registration, student-to-student reads, student edits to lesson content, teacher edits, response save/reload, concurrent edits and export.
- Teacher roster must be authenticated, not a public HTML directory.

## Current known lessons (no account mapping verified)
- Daniel Song / DanielS / daniel-halloween-homework-escape / preview only
- Jordan Ha / JordanH / jordan-ib-success / existing GitHub lesson, auth and saving not verified

## Next prerequisite
Retrieve the existing Firebase web app configuration (non-secret API key/project ID/app ID), current Firestore rules and collection structure; inspect current deployment before modifying any authentication or student records.
