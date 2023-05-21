import PropTypes from 'prop-types';
// import css from './FriendList.module.css';
// import clsx from 'clsx';
import {
  ListFriends,
  CardFriend,
  Photo,
  Name,
  Status,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListFriends>
      {friends.map(friend => (
        <CardFriend key={friend.id}>
          <Status isOnline={friend.isOnline} />
          <Photo src={friend.avatar} alt={friend.name} width="48" />
          <Name>{friend.name}</Name>
        </CardFriend>
      ))}
    </ListFriends>
  );
};

// export const FriendList = ({ friends }) => {
//   return (
//     <ul className={css.friend_list}>
//       {friends.map(friend => (
//         <li className={css.item} key={friend.id}>
//           <span
//             className={
//               clsx(css.status, friend.isOnline ? css.green : css.red)
//               // friend.isOnline
//               //   ? `${css.status} ${css.green}`
//               //   : `${css.status} ${css.red}`
//             }
//           ></span>
//           <img
//             className={css.avatar}
//             src={friend.avatar}
//             alt={friend.name}
//             width="48"
//           />
//           <p className={css.name}>{friend.name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
