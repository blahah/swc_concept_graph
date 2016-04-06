design = `// Where's open?
digraph scb {
	// Properties.
	rankdir = "LR";
	node [shape="rect", fontsize=12];

	// ----------------------------------------
	// Questions.
	// ----------------------------------------

		q_avoid_losing_work [label="How can I avoid losing work?"];
		q_find_use_others_data [label="How can I find and use\nother people's data?"];
		q_find_use_others_software [label="How can I find and use\nother people's software?"];
		q_improve_productivity [label="How can I be more productive?"];
		q_make_collaboration_easy [label="How can I make it easy for people\nto collaborate with me?"];
		q_make_data_findable [label="How can I make it easy for people\nto find and use my data?"];
		q_make_data_usable_by_programs [label="How can I make it easy\nfor programs to use my data?"];
		q_make_software_findable_usable [label="How can I make it easy for people\nto find and use my software?"];
		q_results_correct [label="How can I tell if my results are correct?"];
		q_results_reproducible [label="How can I make it easy for people\nto reproduce my results?"];


	// ----------------------------------------
	// Answers.
	// ----------------------------------------

		a_add_assertions [label="Add assertions to the software to document invariants."];
		a_add_human_work_to_repo [label="Put everything created by people into version control."];
		a_atomic_values [label="Make every value atomic."];
		a_automate_tasks [label="Automate repetitive tasks."];
		a_avoid_duplication [label="Avoid duplicating functionality within modules."];
		a_build_and_smoke_tests [label="Provide simple re-runnable end-to-end test cases."];
		a_build_tools [label="Build tools."];
		a_choose_primary_communication_channel [label="Choose a primary communication channel."];
		a_choose_visualization [label="Choose an appropriate visualization."];
		a_clean_up_data [label="Clean up data."];
		a_code_reviews [label="Do code reviews."];
		a_commit_checklist [label="Maintain a checklist of things to do before sharing a change."];
		a_consistent_project_organization [label="Organize the project consistently."];
		a_data_doi [label="Submit data to a reputable DOI issuer."];
		a_debugging [label="Debug programs."];
		a_document_function [label="Begin programs with explanatory comments."];
		a_dont_duplicate_code [label="Don't duplicate code."];
		a_dont_duplicate_large_data [label="Don't duplicate large data."];
		a_eliminate_redundant_calculation [label="Only do as much calculation as necessary."];
		a_explicit_requirements [label="Make requirements/dependencies explicit."];
		a_foster_welcoming_environment [label="Foster a welcoming environment."];
		a_get_orcid [label="Get an ORCID."];
		a_give_code_meaningful_names [label="Give values, functions, and classes meaningful names."];
		a_good_commit_comments [label="Write good commit comments."];
		a_have_computer_repeat_things [label="Have the computer repeat things."];
		a_include_readme [label="Include a README file explaining project scope."];
		a_isolate_dependencies [label="Isolate project dependencies."];
		a_keys_for_records [label="Give every record a unique key."];
		a_master_manuscript_online [label="Keep the master copy of every manuscript on the web."];
		a_meaningful_path_names [label="Use meaningful path names."];
		a_normalize_data [label="Normalize data."];
		a_prefer_open_text [label="Prefer open text formats to proprietary non-text formats."];
		a_profile_performance [label="Find performance bottlenecks."];
		a_project_todo_list [label="Maintain a to-do list for each project."];
		a_record_analysis_steps_textually [label="Represent every analysis step textually."];
		a_record_data_provenance [label="Record provenance in data."];
		a_record_publishing_steps [label="Record publishing steps in machine-usable form."];
		a_regular_spreadsheet_layout [label="Use regular layout for spreadsheets."];
		a_remove_unused_code [label="Remove unused code."];
		a_represent_each_fact_once [label="Represent each fact once."];
		a_reuse_libraries [label="Re-use libraries rather than writing equivalents."];
		a_run_precommit_checks [label="Run tests automatically before each commit."];
		a_search_answer_sites [label="Search question-and-answer sites."];
		a_search_data_repositories [label="Search data repositories."];
		a_separate_models_from_views [label="Separate models from views."];
		a_set_up_development [label="Make it easy to set up a development environment."];
		a_software_doi [label="Submit software to a reputable DOI issuer."];
		a_sortable_matchable_path_names [label="Use path names that are easy to sort and to match."];
		a_specify_citation [label="Make the preferred citation for projects explicit."];
		a_specify_license [label="Make the project's license explicit."];
		a_store_raw_data [label="Store raw data exactly as it arrived."];
		a_store_work_remote_repo [label="Store work in a remotely-hosted version control repository."];
		a_treat_metadata_like_data [label="Treat metadata like data."];
		a_use_dictionaries [label="Use dictionaries."];
		a_use_more_hardware [label="Use more hardware."];
		a_use_config_files [label="Use configuration files and conditionals rather than commenting."];
		a_use_efficient_data_structures [label="Use efficient data structures."];
		a_use_functions [label="Break programs into short, self-contained functions."];
		a_use_matchable_text [label="Use text values that are easy to match with regular expressions."];
		a_use_package_manager [label="Use a package manager."];
		a_use_relational_database [label="Store data in a relational database."];
		a_write_readable_software [label="Write readable software."];
		a_write_unit_tests [label="Write unit tests to specify and check behavior."];


	// ----------------------------------------
	// Topics.
	// ----------------------------------------

		t_add_to_repository [label="Adding Files to a Repository"];
		t_aggregating_data [label="Aggregating Data"];
		t_blogging [label="Publishing a Blog", fillcolor="honeydew", style="filled"];
		t_boilerplate_citation [label="Specifying Citations", fillcolor="honeydew", style="filled"];
		t_boilerplate_license [label="Specifying a License"];
		t_boilerplate_readme [label="Writing a README File"];
		t_boolean_operators [label="Boolean Operators"];
		t_call_stack [label="Understanding The Call Stack", fillcolor="honeydew", style="filled"];
		t_choosing_good_path_names [label="Choosing Good Path Names", fillcolor="honeydew", style="filled"];
		t_choosing_repository_host [label="Where to Host a Repository"];
		t_choosing_visualization [label="Choosing a Good Visualization", fillcolor="honeydew", style="filled"];
		t_code_of_conduct [label="Creating a Code of Conduct"];
		t_code_reviews [label="Doing Code Reviews", fillcolor="honeydew", style="filled"];
		t_commit_checklist [label="Creating a Commit Checklist", fillcolor="honeydew", style="filled"];
		t_computer_architecture [label="Computer Architecture", fillcolor="honeydew", style="filled"];
		t_conditionals [label="Conditional Expressions"];
		t_continuous_integration [label="Continuous Integration", fillcolor="honeydew", style="filled"];
		t_coverage [label="Coverage Analysis", fillcolor="honeydew", style="filled"];
		t_creating_database [label="Creating a Database"];
		t_creating_integrity_tests [label="Creating Integrity Tests", fillcolor="honeydew", style="filled"];
		t_creating_repository [label="Creating a Repository"];
		t_csv_intro [label="Introducing CSV", fillcolor="honeydew", style="filled"];
		t_data_design [label="Data Design", fillcolor="honeydew", style="filled"];
		t_data_hygiene [label="Data Hygiene", fillcolor="honeydew", style="filled"];
		t_data_types [label="Basic Types and Conversion"];
		t_defensive_programming [label="Defensive Programming"];
		t_documenting_requirements [label="Documenting Software Requirements", fillcolor="honeydew", style="filled"];
		t_environment_variables [label="Environment Variables", fillcolor="honeydew", style="filled"];
		t_exporting_openrefine_history [label="Exporting OpenRefine History", fillcolor="honeydew", style="filled"];
		t_filename_extensions [label="Filename Extensions", fillcolor="honeydew", style="filled"];
		t_filesystem_layout [label="How the Filesystem is Laid Out", fillcolor="honeydew", style="filled"];
		t_filtering_data [label="Filtering Data"];
		t_finding_files [label="Finding Files"];
		t_finding_software [label="Finding Software", fillcolor="honeydew", style="filled"];
		t_formatting_spreadsheets [label="Formatting Spreadsheets", fillcolor="honeydew", style="filled"];
		t_getting_doi [label="Using DOIs", fillcolor="honeydew", style="filled"];
		t_getting_orcid [label="Using ORCIDs", fillcolor="honeydew", style="filled"];
		t_good_commit_comments [label="Writing Good Commit Comments", fillcolor="honeydew", style="filled"];
		t_handling_missing_data [label="Handling Missing Data"];
		t_identify_starting_points [label="Identify Starting Points"];
		t_ignoring_files [label="Ignoring Files"];
		t_installing_software [label="Installing Software", fillcolor="honeydew", style="filled"];
		t_introducing_openrefine [label="Introducing OpenRefine", fillcolor="honeydew", style="filled"];
		t_introducing_relational_databases [label="Introducing Relational Databases"];
		t_introducing_version_control [label="Introducing Version Control"];
		t_issue_tracking [label="Issue Tracking", fillcolor="honeydew", style="filled"];
		t_joining_data [label="Combining Data Using Join"];
		t_learn_about_barriers [label="Learn About Barriers to Participation", fillcolor="honeydew", style="filled"];
		t_logging [label="Logging Program Execution", fillcolor="honeydew", style="filled"];
		t_managing_files [label="Creating, Deleting, and Managing Files"];
		t_merging_changes [label="Merging Changes"];
		t_metadata [label="Storing Metadata", fillcolor="honeydew", style="filled"];
		t_models_vs_views [label="Models vs. Views", fillcolor="honeydew", style="filled"];
		t_navigating_file_system [label="Navigating the File System"];
		t_nobles_rules [label="Noble's Rules for Organizing Projects", fillcolor="honeydew", style="filled"];
		t_pipes_filters [label="Pipes and Filters"];
		t_plotting [label="Plotting", fillcolor="honeydew", style="filled"];
		t_profiling [label="Profiling Performance", fillcolor="honeydew", style="filled"];
		t_program_configuration [label="Configuring Programs", fillcolor="honeydew", style="filled"];
		t_programming_databases [label="Programming Databases"];
		t_programming_style [label="Programming Style", fillcolor="honeydew", style="filled"];
		t_python_dictionaries [label="Python Dictionaries", fillcolor="honeydew", style="filled"];
		t_python_lists [label="Lists in Python"];
		t_read_csv [label="Reading CSV Files"];
		t_reading_error_messages [label="Reading Error Messages"];
		t_recording_history [label="Recording History"];
		t_reproducibility [label="Reproducibility and All That"];
		t_reviewing_version_history [label="Reviewing Version History"];
		t_search_online [label="Searching Online", fillcolor="honeydew", style="filled"];
		t_selecting_data [label="Selecting Data"];
		t_setting_up_for_development [label="Setting Up for Development", fillcolor="honeydew", style="filled"];
		t_taschuks_rules [label="Taschuk's Rules for Project Dependencies", fillcolor="honeydew", style="filled"];
		t_task_farming [label="Task Farming", fillcolor="honeydew", style="filled"];
		t_trace_execution [label="Tracing Program Execution", fillcolor="honeydew", style="filled"];
		t_tracking_provenance [label="Tracking Provenance", fillcolor="honeydew", style="filled"];
		t_update_data [label="Updating Data"];
		t_update_repository [label="Updating a Repository"];
		t_use_package_manager [label="Using a Package Manager", fillcolor="honeydew", style="filled"];
		t_using_branches [label="Using Branches", fillcolor="honeydew", style="filled"];
		t_using_editor [label="Using a Plain Text Editor", fillcolor="honeydew", style="filled"];
		t_using_libraries [label="Using Libraries"];
		t_using_make [label="Using Make"];
		t_using_numpy [label="Using NumPy", fillcolor="honeydew", style="filled"];
		t_using_openrefine [label="Using OpenRefine", fillcolor="honeydew", style="filled"];
		t_using_pandas [label="Using Pandas", fillcolor="honeydew", style="filled"];
		t_using_regular_expressions [label="Using Regular Expressions", fillcolor="honeydew", style="filled"];
		t_using_web_authoring [label="Using Web-based Authoring Tools", fillcolor="honeydew", style="filled"];
		t_variable_scope [label="Variable Scope"];
		t_variables_assignment [label="Variables and Assignment"];
		t_what_not_to_store [label="What Not to Put in Version Control"];
		t_writing_functions [label="Writing Functions"];
		t_writing_programs [label="Writing Programs"];
		t_writing_python_loops [label="Writing Loops in Python"];
		t_writing_shell_loops [label="Writing Loops in the Shell"];
		t_writing_shell_scripts [label="Writing Shell Scripts"];
		t_writing_unit_tests [label="Writing Unit Tests", fillcolor="honeydew", style="filled"];


	// ----------------------------------------
	// Questions to answers.
	// ----------------------------------------

	q_avoid_losing_work:e -> a_add_human_work_to_repo:w;
	q_avoid_losing_work:e -> a_good_commit_comments:w;
	q_avoid_losing_work:e -> a_prefer_open_text:w;
	q_avoid_losing_work:e -> a_store_work_remote_repo:w;
	q_find_use_others_data:e -> a_reuse_libraries:w;
	q_find_use_others_data:e -> a_search_data_repositories:w;
	q_find_use_others_software:e -> a_code_reviews:w;
	q_find_use_others_software:e -> a_reuse_libraries:w;
	q_find_use_others_software:e -> a_search_answer_sites:w;
	q_find_use_others_software:e -> a_use_package_manager:w;
	q_improve_productivity:e -> a_automate_tasks:w;
	q_improve_productivity:e -> a_build_tools:w;
	q_improve_productivity:e -> a_eliminate_redundant_calculation:w;
	q_improve_productivity:e -> a_have_computer_repeat_things:w;
	q_improve_productivity:e -> a_profile_performance:w;
	q_improve_productivity:e -> a_use_efficient_data_structures:w;
	q_improve_productivity:e -> a_use_more_hardware:w;
	q_make_collaboration_easy:e -> a_add_assertions:w;
	q_make_collaboration_easy:e -> a_build_and_smoke_tests:w;
	q_make_collaboration_easy:e -> a_choose_primary_communication_channel:w;
	q_make_collaboration_easy:e -> a_commit_checklist:w;
	q_make_collaboration_easy:e -> a_foster_welcoming_environment:w;
	q_make_collaboration_easy:e -> a_get_orcid:w;
	q_make_collaboration_easy:e -> a_master_manuscript_online:w;
	q_make_collaboration_easy:e -> a_project_todo_list:w;
	q_make_collaboration_easy:e -> a_record_publishing_steps:w;
	q_make_collaboration_easy:e -> a_set_up_development:w;
	q_make_collaboration_easy:e -> a_specify_citation:w;
	q_make_collaboration_easy:e -> a_specify_license:w;
	q_make_data_findable:e -> a_clean_up_data:w;
	q_make_data_findable:e -> a_data_doi:w;
	q_make_data_findable:e -> a_dont_duplicate_large_data:w;
	q_make_data_findable:e -> a_meaningful_path_names:w;
	q_make_data_findable:e -> a_normalize_data:w;
	q_make_data_findable:e -> a_regular_spreadsheet_layout:w;
	q_make_data_findable:e -> a_separate_models_from_views:w;
	q_make_data_findable:e -> a_store_raw_data:w;
	q_make_data_findable:e -> a_treat_metadata_like_data:w;
	q_make_data_findable:e -> a_use_relational_database:w;
	q_make_data_usable_by_programs:e -> a_atomic_values:w;
	q_make_data_usable_by_programs:e -> a_avoid_duplication:w;
	q_make_data_usable_by_programs:e -> a_keys_for_records:w;
	q_make_data_usable_by_programs:e -> a_sortable_matchable_path_names:w;
	q_make_data_usable_by_programs:e -> a_treat_metadata_like_data:w;
	q_make_data_usable_by_programs:e -> a_use_matchable_text:w;
	q_make_software_findable_usable:e -> a_document_function:w;
	q_make_software_findable_usable:e -> a_dont_duplicate_code:w;
	q_make_software_findable_usable:e -> a_explicit_requirements:w;
	q_make_software_findable_usable:e -> a_give_code_meaningful_names:w;
	q_make_software_findable_usable:e -> a_include_readme:w;
	q_make_software_findable_usable:e -> a_isolate_dependencies:w;
	q_make_software_findable_usable:e -> a_remove_unused_code:w;
	q_make_software_findable_usable:e -> a_reuse_libraries:w;
	q_make_software_findable_usable:e -> a_software_doi:w;
	q_make_software_findable_usable:e -> a_store_work_remote_repo:w;
	q_make_software_findable_usable:e -> a_use_config_files:w;
	q_make_software_findable_usable:e -> a_use_dictionaries:w;
	q_make_software_findable_usable:e -> a_use_functions:w;
	q_results_correct:e -> a_add_assertions:w;
	q_results_correct:e -> a_build_and_smoke_tests:w;
	q_results_correct:e -> a_choose_visualization:w;
	q_results_correct:e -> a_code_reviews:w;
	q_results_correct:e -> a_debugging:w;
	q_results_correct:e -> a_run_precommit_checks:w;
	q_results_correct:e -> a_write_readable_software:w;
	q_results_correct:e -> a_write_unit_tests:w;
	q_results_reproducible:e -> a_consistent_project_organization:w;
	q_results_reproducible:e -> a_record_analysis_steps_textually:w;
	q_results_reproducible:e -> a_record_data_provenance:w;
	q_results_reproducible:e -> a_set_up_development:w;

	// ----------------------------------------
	// Answers to topics.
	// ----------------------------------------

	a_add_assertions:e -> t_defensive_programming:w;
	a_add_human_work_to_repo:e -> t_add_to_repository:w;
	a_add_human_work_to_repo:e -> t_update_repository:w;
	a_atomic_values:e -> t_data_hygiene:w;
	a_automate_tasks:e -> t_writing_shell_scripts:w;
	a_avoid_duplication:e -> t_programming_style:w;
	a_build_and_smoke_tests:e -> t_creating_integrity_tests:w;
	a_build_tools:e -> t_pipes_filters:w;
	a_build_tools:e -> t_writing_programs:w;
	a_build_tools:e -> t_writing_shell_scripts:w;
	a_choose_primary_communication_channel:e -> t_blogging:w;
	a_choose_visualization:e -> t_choosing_visualization:w;
	a_clean_up_data:e -> t_data_hygiene:w;
	a_clean_up_data:e -> t_introducing_openrefine:w;
	a_code_reviews:e -> t_code_reviews:w;
	a_commit_checklist:e -> t_commit_checklist:w;
	a_consistent_project_organization:e -> t_nobles_rules:w;
	a_data_doi:e -> t_getting_doi:w;
	a_debugging:e -> t_logging:w;
	a_debugging:e -> t_reading_error_messages:w;
	a_debugging:e -> t_trace_execution:w;
	a_debugging:e -> t_writing_unit_tests:w;
	a_document_function:e -> t_programming_style:w;
	a_dont_duplicate_code:e -> t_programming_style:w;
	a_dont_duplicate_large_data:e -> t_what_not_to_store:w;
	a_eliminate_redundant_calculation:e -> t_using_make:w;
	a_explicit_requirements:e -> t_documenting_requirements:w;
	a_foster_welcoming_environment:e -> t_code_of_conduct:w;
	a_foster_welcoming_environment:e -> t_learn_about_barriers:w;
	a_foster_welcoming_environment:e -> t_identify_starting_points:w;
	a_get_orcid:e -> t_getting_orcid:w;
	a_give_code_meaningful_names:e -> t_programming_style:w;
	a_good_commit_comments:e -> t_good_commit_comments:w;
	a_have_computer_repeat_things:e -> t_writing_python_loops:w;
	a_have_computer_repeat_things:e -> t_writing_shell_loops:w;
	a_include_readme:e -> t_boilerplate_readme:w;
	a_include_readme:e -> t_documenting_requirements:w;
	a_isolate_dependencies:e -> t_taschuks_rules:w;
	a_keys_for_records:e -> t_python_dictionaries:w;
	a_keys_for_records:e -> t_data_hygiene:w;
	a_master_manuscript_online:e -> t_using_web_authoring:w;
	a_master_manuscript_online:e -> t_introducing_version_control:w;
	a_meaningful_path_names:e -> t_choosing_good_path_names:w;
	a_meaningful_path_names:e -> t_filename_extensions:w;
	a_normalize_data:e -> t_formatting_spreadsheets:w;
	a_normalize_data:e -> t_introducing_relational_databases:w;
	a_prefer_open_text:e -> t_csv_intro:w;
	a_prefer_open_text:e -> t_read_csv:w;
	a_profile_performance:e -> t_profiling:w;
	a_project_todo_list:e -> t_issue_tracking:w;
	a_record_analysis_steps_textually:e -> t_exporting_openrefine_history:w;
	a_record_analysis_steps_textually:e -> t_recording_history:w;
	a_record_analysis_steps_textually:e -> t_using_make:w;
	a_record_analysis_steps_textually:e -> t_writing_programs:w;
	a_record_analysis_steps_textually:e -> t_writing_shell_scripts:w;
	a_record_data_provenance:e -> t_tracking_provenance:w;
	a_record_publishing_steps:e -> t_using_make:w;
	a_record_publishing_steps:e -> t_writing_shell_scripts:w;
	a_regular_spreadsheet_layout:e -> t_formatting_spreadsheets:w;
	a_remove_unused_code:e -> t_coverage:w;
	a_represent_each_fact_once:e -> t_data_hygiene:w;
	a_reuse_libraries:e -> t_finding_software:w;
	a_reuse_libraries:e -> t_using_libraries:w;
	a_run_precommit_checks:e -> t_continuous_integration:w;
	a_search_answer_sites:e -> t_search_online:w;
	a_search_data_repositories:e -> t_search_online:w;
	a_separate_models_from_views:e -> t_models_vs_views:w;
	a_set_up_development:e -> t_setting_up_for_development:w;
	a_set_up_development:e -> t_use_package_manager:w;
	a_software_doi:e -> t_getting_doi:w;
	a_sortable_matchable_path_names:e -> t_choosing_good_path_names:w;
	a_specify_citation:e -> t_boilerplate_citation:w;
	a_specify_license:e -> t_boilerplate_license:w;
	a_store_raw_data:e -> t_nobles_rules:w;
	a_store_raw_data:e -> t_tracking_provenance:w;
	a_store_work_remote_repo:e -> t_choosing_repository_host:w;
	a_store_work_remote_repo:e -> t_ignoring_files:w;
	a_store_work_remote_repo:e -> t_introducing_version_control:w;
	a_treat_metadata_like_data:e -> t_metadata:w;
	a_use_dictionaries:e -> t_python_dictionaries:w;
	a_use_config_files:e -> t_conditionals:w;
	a_use_config_files:e -> t_program_configuration:w;
	a_use_config_files:e -> t_programming_style:w;
	a_use_efficient_data_structures:e -> t_python_dictionaries:w;
	a_use_efficient_data_structures:e -> t_python_lists:w;
	a_use_efficient_data_structures:e -> t_using_numpy:w;
	a_use_efficient_data_structures:e -> t_using_pandas:w;
	a_use_functions:e -> t_programming_style:w;
	a_use_functions:e -> t_writing_functions:w;
	a_use_matchable_text:e -> t_using_regular_expressions:w;
	a_use_more_hardware:e -> t_computer_architecture:w;
	a_use_more_hardware:e -> t_task_farming:w;
	a_use_package_manager:e -> t_use_package_manager:w;
	a_use_relational_database:e -> t_aggregating_data:w;
	a_use_relational_database:e -> t_creating_database:w;
	a_use_relational_database:e -> t_data_design:w;
	a_use_relational_database:e -> t_filtering_data:w;
	a_use_relational_database:e -> t_handling_missing_data:w;
	a_use_relational_database:e -> t_introducing_relational_databases:w;
	a_use_relational_database:e -> t_joining_data:w;
	a_use_relational_database:e -> t_programming_databases:w;
	a_use_relational_database:e -> t_selecting_data:w;
	a_use_relational_database:e -> t_update_data:w;
	a_write_readable_software:e -> t_programming_style:w;
	a_write_unit_tests:e -> t_writing_unit_tests:w;

	// ----------------------------------------
	// Topics to topics.
	// ----------------------------------------

	t_add_to_repository:e -> t_creating_repository:e;
	t_add_to_repository:e -> t_introducing_version_control:e;
	t_aggregating_data:e -> t_handling_missing_data:e;
	t_blogging:e -> t_using_web_authoring:e;
	t_call_stack:e -> t_variable_scope:e;
	t_choosing_good_path_names:e -> t_filename_extensions:e;
	t_choosing_good_path_names:e -> t_finding_files:e;
	t_choosing_repository_host:e -> t_introducing_version_control:e;
	t_choosing_visualization:e -> t_plotting:e;
	t_code_of_conduct:e -> t_learn_about_barriers:e;
	t_code_reviews:e -> t_merging_changes:e;
	t_code_reviews:e -> t_reviewing_version_history:e;
	t_code_reviews:e -> t_using_branches:e;
	t_computer_architecture:e -> t_data_types:e;
	t_continuous_integration:e -> t_commit_checklist:e;
	t_creating_database:e -> t_joining_data:e;
	t_creating_repository:e -> t_introducing_version_control:e;
	t_data_design:e -> t_joining_data:e;
	t_data_hygiene:e -> t_data_design:e;
	t_data_types:e -> t_variables_assignment:e;
	t_exporting_openrefine_history:e -> t_introducing_openrefine:e;
	t_filtering_data:e -> t_introducing_relational_databases:e;
	t_finding_files:e -> t_filesystem_layout:e;
	t_finding_software:e -> t_search_online:e;
	t_good_commit_comments:e -> t_add_to_repository:e;
	t_handling_missing_data:e -> t_selecting_data:e;
	t_identify_starting_points:e -> t_issue_tracking:e;
	t_ignoring_files:e -> t_add_to_repository:e;
	t_installing_software:e -> t_environment_variables:e;
	t_introducing_openrefine:e -> t_formatting_spreadsheets:e;
	t_joining_data:e -> t_handling_missing_data:e;
	t_managing_files:e -> t_using_editor:e;
	t_plotting:e -> t_using_libraries:e;
	t_plotting:e -> t_using_pandas:e;
	t_profiling:e -> t_computer_architecture:e;
	t_program_configuration:e -> t_environment_variables:e;
	t_program_configuration:e -> t_boolean_operators:e;
	t_programming_databases:e -> t_selecting_data:e;
	t_programming_style:e -> t_writing_functions:e;
	t_read_csv:e -> t_csv_intro:e;
	t_read_csv:e -> t_using_pandas:e;
	t_reproducibility:e -> t_program_configuration:e;
	t_reproducibility:e -> t_documenting_requirements:e;
	t_reproducibility:e -> t_metadata:e;
	t_reproducibility:e -> t_tracking_provenance:e;
	t_search_online:e -> t_boolean_operators:e;
	t_selecting_data:e -> t_introducing_relational_databases:e;
	t_taschuks_rules:e -> t_program_configuration:e;
	t_taschuks_rules:e -> t_environment_variables:e;
	t_task_farming:e -> t_computer_architecture:e;
	t_task_farming:e -> t_writing_shell_loops:e;
	t_trace_execution:e -> t_call_stack:e;
	t_trace_execution:e -> t_logging:e;
	t_trace_execution:e -> t_variables_assignment:e;
	t_tracking_provenance:e -> t_recording_history:e;
	t_update_data:e -> t_selecting_data:e;
	t_update_repository:e -> t_add_to_repository:e;
	t_use_package_manager:e -> t_filesystem_layout:e;
	t_use_package_manager:e -> t_installing_software:e;
	t_using_libraries:e -> t_variables_assignment:e;
	t_using_make:e -> t_writing_shell_scripts:e;
	t_using_numpy:e -> t_data_types:e;
	t_using_numpy:e -> t_using_libraries:e;
	t_using_openrefine:e -> t_introducing_openrefine:e;
	t_using_openrefine:e -> t_using_regular_expressions:e;
	t_using_pandas:e -> t_data_types:e;
	t_using_pandas:e -> t_using_libraries:e;
	t_variable_scope:e -> t_variables_assignment:e;
	t_writing_functions:e -> t_conditionals:e;
	t_writing_functions:e -> t_variable_scope:e;
	t_writing_programs:e -> t_using_libraries:e;
	t_writing_programs:e -> t_using_numpy:e;
	t_writing_programs:e -> t_using_pandas:e;
	t_writing_programs:e -> t_writing_functions:e;
	t_writing_python_loops:e -> t_python_lists:e;
	t_writing_shell_scripts:e -> t_managing_files:e;
	t_writing_shell_scripts:e -> t_navigating_file_system:e;
	t_writing_shell_scripts:e -> t_pipes_filters:e;
	t_writing_shell_scripts:e -> t_using_editor:e;
	t_writing_unit_tests:e -> t_defensive_programming:e;
	t_writing_unit_tests:e -> t_writing_functions:e;
}`
