/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
      id
      title
      messages {
        items {
          id
          roomID
          playerID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
      id
      title
      messages {
        items {
          id
          roomID
          playerID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
      id
      title
      messages {
        items {
          id
          roomID
          playerID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      roomID
      room {
        id
        title
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      playerID
      player {
        id
        matchID
        match {
          id
          matchTitle
          matchOwner
          createdAt
          updatedAt
        }
        user
        nickname
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      roomID
      room {
        id
        title
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      playerID
      player {
        id
        matchID
        match {
          id
          matchTitle
          matchOwner
          createdAt
          updatedAt
        }
        user
        nickname
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      roomID
      room {
        id
        title
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      playerID
      player {
        id
        matchID
        match {
          id
          matchTitle
          matchOwner
          createdAt
          updatedAt
        }
        user
        nickname
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch {
    onCreateMatch {
      id
      matchTitle
      matchOwner
      players {
        items {
          id
          matchID
          user
          nickname
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch {
    onUpdateMatch {
      id
      matchTitle
      matchOwner
      players {
        items {
          id
          matchID
          user
          nickname
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch {
    onDeleteMatch {
      id
      matchTitle
      matchOwner
      players {
        items {
          id
          matchID
          user
          nickname
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
      id
      matchID
      match {
        id
        matchTitle
        matchOwner
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      user
      nickname
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
      id
      matchID
      match {
        id
        matchTitle
        matchOwner
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      user
      nickname
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
      id
      matchID
      match {
        id
        matchTitle
        matchOwner
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      user
      nickname
      createdAt
      updatedAt
    }
  }
`;
