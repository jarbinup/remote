import './App.css';
import { List } from 'antd';

const getAvatar = (users: Array<{ name: string; email: string }>) =>
  users.map(user => ({
    ...user,
    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,
  }));

const mockData = getAvatar([
  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },
  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },
  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },
  { name: 'Davis', email: '"t.kqkoj@utlkwnpwk.nu' },
]);

const App = () => (
  <div>
    <List
      dataSource={mockData}
      renderItem={({ name, avatar, email }) => (
        <List.Item key={name}>
          <List.Item.Meta
            avatar={<img alt="avatar" src={avatar} width={60} height={60} />}
            title={name}
            description={email}
          />
        </List.Item>
      )}
    />
  </div>
);

export default App;
