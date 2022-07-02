import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import "./styles.css";


export default function VerticalNav() {
  return (
    <div className="dropbox">
     <div className = "description">
     Explore various topics for quiz to know where you stand. WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi. 
     Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus diam. Sed nisi. Nbcnt per conubia nostra.
     </div>
     <div className="verticalNav">
     <div>
    <TreeView className = "verticalnav"
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{  flexGrow: 1 }}
    >
      
      <TreeItem  nodeId="1" label="Geometry">
        <TreeItem nodeId="2" label="Circles"/>
        <TreeItem nodeId="3" label= "Triangles"  />
        <TreeItem nodeId="4" label=  "Quadrilaterals"/>
      </TreeItem>
      <TreeItem nodeId="5" label="Algebra">
        <TreeItem nodeId="10" label="Parabolas" />
        <TreeItem nodeId="6" label="Agri">
          <TreeItem nodeId="8" label="Parabolas"/>
        </TreeItem>
      </TreeItem>
    </TreeView>
    </div>
     </div>
    </div>
  );
}
