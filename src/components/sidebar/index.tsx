import * as C from './styled';

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const Sidebar = ({ isOpen, toggle }: Props) => {
  return (
    <C.Container isOpen={isOpen}>
      <C.Icon onClick={toggle}>
        <C.CloseIcon />
      </C.Icon>
      <C.SidebarWrapper>
        <C.SidebarMenu>
          <C.SidebarLink to='about' onClick={toggle}>About</C.SidebarLink>
          <C.SidebarLink to='discover' onClick={toggle}>Discover</C.SidebarLink>
          <C.SidebarLink to='services' onClick={toggle}>Services</C.SidebarLink>
          <C.SidebarLink to='signup' onClick={toggle}>Signup</C.SidebarLink>
        </C.SidebarMenu>
        <C.SideBtnWrap>
          <C.SidebarRoute to='/signin '>Sign In</C.SidebarRoute>
        </C.SideBtnWrap>
      </C.SidebarWrapper>
    </C.Container>
  );
};