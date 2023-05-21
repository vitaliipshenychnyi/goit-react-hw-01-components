import styled from 'styled-components';

export const ListFriends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #fbffb1;
  border-radius: 20px;
`;

export const CardFriend = styled.li`
  display: flex;
  align-items: center;
  width: 400px;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const Status = styled.span`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Photo = styled.img`
  width: 100px;
`;

export const Name = styled.p`
  text-align: center;
  font-size: 32px;
  font-weight: 500;
`;
