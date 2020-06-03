## Overview

A solution for online planning poker/grooming sessions

## High Level Requirements

MVP

### Creating sessions

- Users should be able to create grooming sessions
  - To create a session the user provides their name and the session name
  - Once created a session gets a unique ID/link which can be shared with participants
- The session owner can:
  - Invite participants by sharing the link
  - Add stories to be voted on
- The session owner can start voting on a story
  - This will allow all participants to choose a vote for that story
- The session owner can end voting on a story
  - This will reveal all player votes, the average vote, and the highs/lows
- The session owner can review the votes for all stories
- The session owner can close the session

### Participating in a session

- A user can join a session with the shared link or with the session ID
  - They must enter their name to join the session
- A user can vote on a story once voting is open

## API - User

- createUser
- updateUser
- getCurrentUser

## API - Session

- createNewSession
- updateSession

## State

```json
{
  "title": "My Session",
  "creator": "userId",
  "status": "OPEN", // VOTING CLOSED
  "participants": ["userId", "otherUserId"],
  "activeParticipants": ["otherUserId"],
  "backlogItems": [
    {
      "id": 123
      "title": "Title",
      "votes": [
        {
          "user": "userId",
          "value": 123
        }
      ]
    }
  ],
  "currentBacklogItem": "itemId"
}
```
