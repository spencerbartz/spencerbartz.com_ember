<?php
	include "dbconnect.php";

	$project_type = $_REQUEST["filter"]["project_type"];

	$mysqli_connection = get_mysqli_connection("portfolio");
	$sql = "SELECT * FROM projects WHERE project_type = '" . $project_type . "'";
	$result_set = $mysqli_connection->query($sql);
	$json_msg = array("projects" => array(), "errors" => array());

	function push_error(&$json_msg, $error) {
		array_push($json_msg["errors"],  array("id" => "1", "message" => $error));
	}

	function add_record(&$json_msg, $row) {
		array_push($json_msg["projects"],
			array(
				"id" => $row["id"],
				"type" => "project",
				"lastUpdated" => $row["last_updated"],
				"description" => $row["description"],
				"projectType" => $row["project_type"]
			)
		);
	}

	if(!$result_set) {
		push_error($json_msg, "Could not search projects.");
	}
  else if(isset($result_set->num_rows) && $result_set->num_rows == 0) {
		push_error($json_msg, "There are no projects to display at this time.");
  }
  else {
		while($row = mysqli_fetch_assoc($result_set)) {
			add_record($json_msg, $row);
		}

		if(isset($json_msg["data"]) && count($json_msg["data"]) === 0) {
			push_error($json_msg, "There are no projects to display at this time.");
		}
	}

	echo json_encode($json_msg, JSON_UNESCAPED_SLASHES);
?>
