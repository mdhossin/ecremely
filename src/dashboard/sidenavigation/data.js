


import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import WorkIcon from "@mui/icons-material/Work";
import Person3Icon from "@mui/icons-material/Person3";
import BarChartIcon from "@mui/icons-material/BarChart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SettingsIcon from "@mui/icons-material/Settings";


const data = [
  {
    title: 'Hours',
    icon: <AccessTimeIcon />,
    link: '/',
  },
  {
    title: 'Tasks',
    icon: <AssignmentTurnedInRoundedIcon />,
    link: '/admin/bills',
  },
  {
    title: 'Projects',
    icon: <WorkIcon />,
    link: '/admin/applications',
  },
  {
    title: 'People',
    icon: <Person3Icon />,
    link: '/admin/monitoring',
  },
  {
    title: 'Reports',
    icon: <BarChartIcon />,
    link: '/admin/demographics',
  },
  {
    title: 'Invoices',
    icon: <MonetizationOnIcon />,
    link: '/admin/monitoring',
  },
  
  {
  
    
    link: '',
  },
  
  {
    
    
    link: '',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/admin/analytics',
  },
 
];

export default data;
