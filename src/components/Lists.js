import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {getLists, add, del, toggle, setActive} from '../store/actions/list';
import {setList} from '../store/actions/share';

import List from './List';

import {ListsWrapper, Section, Title, Target} from '../styles/lists';
import {useHistory} from 'react-router-native';

const Lists = ({
  personal,
  shared,
  user,
  active,
  getLists,
  del,
  toggle,
  add,
  setActive,
}) => {
  const [personalCollapsed, togglePersonal] = useState(false);
  const [sharedCollapsed, toggleShared] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      getLists(user.token);
    }
  }, [getLists, user]);

  if (!user) {
    return null;
  }

  const selectActive = item => {
    if (active !== item.id) {
      setActive(item);
    }
  };

  const drawList = list =>
    list.map(item => {
      return (
        <List
          key={item.id}
          item={item}
          isActive={item.id === active}
          handleClick={() => {
            selectActive(item);
            history.push(`/lists/${item.id}`);
          }}
          handleDelete={() => del(item.id, user.id)}
          handleToggle={() => toggle(item.id, user.token)}
          handleShare={() => setList(item.id)}
          isCreator={user.id === item.creator}
        />
      );
    });

  return (
    <ListsWrapper>
      <Section collapsed={personalCollapsed}>
        <Target onPress={() => togglePersonal(!personalCollapsed)}>
          <Title>
            <Text>personal</Text>
            <Text>{personalCollapsed ? '+' : '-'}</Text>
          </Title>
        </Target>

        {drawList(personal)}
      </Section>
      <Section collapsed={sharedCollapsed}>
        <Target onPress={() => toggleShared(!sharedCollapsed)}>
          <Title>
            <Text>shared</Text>
            <Text>{sharedCollapsed ? '+' : '-'}</Text>
          </Title>
        </Target>

        {drawList(shared)}
      </Section>
    </ListsWrapper>
  );
};

Lists.propTypes = {
  getLists: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  personal: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  shared: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setActive: PropTypes.func.isRequired,
  setList: PropTypes.func.isRequired,
  active: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  user: PropTypes.shape({
    token: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = state => ({
  user: state.auth.user,
  personal: state.lists.personal,
  shared: state.lists.shared,
  active: state.lists.active,
});

const mapDispatchToProps = {
  getLists,
  add,
  del,
  toggle,
  setList,
  setActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
