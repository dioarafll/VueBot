// Import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons
import {
  faPlus,
  faMinus,
  faRedo,
  faBars,
  faTimes,
  faUser,
  faCogs,
  faPlusCircle,
  faMicrophone,
  faPaperclip,
  faPaperPlane,
  faRobot,
  faThumbsUp,
  faThumbsDown,
  faCopy,
  faEllipsisVertical,
  faPencil,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle,
  faApple,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';

// Define an array of icons
const icons = [
  faPlus,
  faMinus,
  faRedo,
  faBars,
  faTimes,
  faUser,
  faCogs,
  faPlusCircle,
  faRobot,
  faThumbsUp,
  faThumbsDown,
  faCopy,
  faMicrophone,
  faPaperclip,
  faPaperPlane,
  faEllipsisVertical,
  faPencil,
  faTrash,
  faGoogle,
  faApple,
  faMicrosoft,
];

library.add(...icons);

export default library;
