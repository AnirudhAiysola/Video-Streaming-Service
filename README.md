# Video-Streaming-Service

Tech Stack:
TypeScript
Next.js
Express.js
Docker
FFmpeg
Firebase Auth
Firebase Functions
Firebase Firestore
Google Cloud Storage
Google Cloud Pub/Sub
Google Cloud Run


Flow:

    Cloud Storage will store the raw and processed videos uploaded by users.
    Pub/Sub will send messages to the video processing service.
    Cloud Run will host a non-public video processing service. After it transcodes videos, they will be uploaded to Cloud Storage.
    Cloud Firestore will store the metadata for the videos.
    Cloud Run will host a Next.js app, serving as the YouTube web client.
    The Next.js app will make API calls to Firebase Functions.
    Firebase Functions will fetch videos from Cloud Firestore and return them.
