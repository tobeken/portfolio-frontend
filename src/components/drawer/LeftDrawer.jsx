// import { IconButton } from '@mui/material';
// import { styled, useTheme } from '@mui/material/styles';
// import Drawer from '@mui/material/Drawer';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import Divider from '@mui/material/Divider';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// const handleDrawerOpen = () => {
//   setOpen(true);
// };

// const handleDrawerClose = () => {
//   setOpen(false);
// };

// const LeftDrawer = () => {
//   const [open, setOpen] = React.useState(false);
//   return (
//     <Drawer
// sx={{
//   width: drawerWidth,
//   flexShrink: 0,
//   '& .MuiDrawer-paper': {
//     width: drawerWidth,
//     boxSizing: 'border-box',
//   },
// }}
// variant="persistent"
// anchor="left"
// open={open}
// >
// <DrawerHeader>
//   <IconButton onClick={handleDrawerClose}>
//     {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//   </IconButton>
// </DrawerHeader>
// <Divider />
// <List>
//   {['Profile', 'Recommend', 'All Jobs'].map((text, index) => (
//     <ListItem key={text} disablePadding>
//       <ListItemButton>
//         <ListItemIcon>
//           {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//         </ListItemIcon>
//         <ListItemText primary={text} />
//       </ListItemButton>
//     </ListItem>
//   ))}
// </List>
// <Divider />
// <List>
//   {['Post Jobs','Logout'].map((text, index) => (
//     <ListItem key={text} disablePadding>
//       <ListItemButton>
//         <ListItemIcon>
//           {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//         </ListItemIcon>
//         <ListItemText primary={text} />
//       </ListItemButton>
//     </ListItem>
//   ))}
// </List>
// </Drawer>
   
//   )
// }

// export default LeftDrawer



