import { 
  Admin,
  Resource,
  ListGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { authProvider } from "./authProvider";
import { Dashboard } from "./Dashboard";
import { GoalList, GoalEdit, GoalCreate } from "./goals";
import FlagIcon from '@mui/icons-material/Flag';

export const App = () => (
  <Admin authProvider={authProvider}  dataProvider={dataProvider} dashboard={Dashboard} >
    <Resource name="goals" icon={FlagIcon} list={GoalList} edit={GoalEdit} create={GoalCreate} />
  </Admin>
);
