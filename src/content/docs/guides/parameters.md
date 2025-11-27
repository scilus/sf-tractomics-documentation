---
title: Pipeline Parameters
description: sf-tractomics parameters
---

### **Input/output options**

This section will detail how to set the inputs and outputs of the pipeline.

| Parameter | Description | Type | Default | Required | Hidden |
|-----------|-----------|-----------|-----------|-----------|-----------|
| `input` | Path to the BIDS directory location. <details><summary>Help</summary><small>Ensure the BIDS data structure is respected. For more information, see the [documentation](https://scilus.github.io/sf-tractomics/guides/inputs/)</small></details>| `string` |  |  |  |
| `input_deriv` | Path to the derivatives directory to use as input. | `string` |  |  |  |
| `bids_script` | Path to the BIDS script. <details><summary>Help</summary><small>This is a script that will be used to generate the BIDS directory structure from the raw data. Unless you know what you are doing, this should not be changed. Will be removed in a future release.</small></details>| `string` |  |  | True |
| `outdir` | The output directory where the results will be saved. You have to use absolute paths to storage on Cloud infrastructure. <details><summary>Help</summary><small>For a detailed description of the output files, please see the [documentation](https://scilus.github.io/sf-tractomics/guides/outputs/).</small></details>| `string` |  | True |  |
| `email` | Email address for completion summary. <details><summary>Help</summary><small>Set this parameter to your e-mail address to get a summary e-mail with details of the run sent to you when the workflow exits. If set in your user config file (`~/.nextflow/config`) then you don't need to specify this on the command line for every run.</small></details>| `string` |  |  |  |
| `-with-report` | MultiQC report title for subject report. Printed as page header, used for filename if not otherwise specified. | `string` |  |  |  |


### **Eddy Current Options**

Options for FreeSurfer, FastSurfer, and/or M-CRIB-S processing. Only relevant if you select the segmentation profile.

| Parameter | Description | Type | Default | Required | Hidden |
|-----------|-----------|-----------|-----------|-----------|-----------|
| `processes` | Number of iteration used for Eddy current | `number` | 10 |  | False |

### **DTI Options**

Options for diffusion tensor fitting.

| Parameter | Description | Type | Default | Required | Hidden |
|-----------|-----------|-----------|-----------|-----------|-----------|
| `dti_max_shell_value` | Maximum shell value used in the DTI processing step. | `integer` | 3500 |  | True |

### **FRF Options**

Options for fiber response function (FRF) processing. The FRF is derived from normative curves in function of each participant's age. The current options are mostly if you want to override this default behavior.

| Parameter | Description | Type | Default | Required | Hidden |
|-----------|-----------|-----------|-----------|-----------|-----------|
| `nvox_min` | Minimum number of voxels to include in the computation of the FRF. | `integer` | 100 |  | True |

### **FODF Options**

Options for FODF processing.

| Parameter | Description | Type | Default | Required | Hidden |
|-----------|-----------|-----------|-----------|-----------|-----------|
| `fodf_sh_order` | Spherical harmonics order used in the FODF processing step. | `integer` | 6 |  | False |


### **Local Tracking Options**

Options for local tracking.

| Parameter | Description | Type | Default | Required | Hidden |
|-----------|-----------|-----------|-----------|-----------|-----------|
| `local_nbr_seeds` | Number of seeds used in the local tracking step. | `integer` | 10 |  | False |
| `local_step` | Step value used in the local tracking step. Shoud be 10% of the resolution size. | `number` | 0.005 |  | True |
| `local_theta` | Theta value used in the local tracking step. | `number` | 45 |  | True |
| `local_rk_order` | Order of the Runge-Kutta integration used for the step function. | `number` | 1 |  | True |
| `local_min_len` | Minimum length used in the local tracking step. | `number` | 3 |  | False |
| `local_max_len` | Maximum length used in the local tracking step. | `number` | 12 |  | False |

### **Pipeline profile**

Pipeline profile options. This is a short list of options. For full description, please see [the documentation](https://scilus.github.io/sf-tractomics/guides/usage/#choosing-a-profile)

| Parameter | Description | Type | Default | Required | Hidden |
|-----------|-----------|-----------|-----------|-----------|-----------|
| `tracking` | Perform tracking profile. | `boolean` | False |  | True |
| `bundling` | Perform bundle extraction profile. | `boolean` | False |  | True |
| `connectomics` | Perform connectomics profile. | `boolean` | False |  | True |
| `segmentation` | Perform segmentation profile. | `boolean` | False |  | True |

### **Institutional config options**

Parameters used to describe centralised config profiles. These should not be edited.

| Parameter | Description | Type | Default | Required | Hidden |
|-----------|-----------|-----------|-----------|-----------|-----------|
| `custom_config_version` | Git commit id for Institutional configs. | `string` | master |  | True |
| `custom_config_base` | Base directory for Institutional configs. <details><summary>Help</summary><small>If you're running offline, Nextflow will not be able to fetch the institutional config files from the internet. If you don't need them, then this is not a problem. If you do need them, you should download the files from the repo and tell Nextflow where to find them with this parameter.</small></details>| `string` | https://raw.githubusercontent.com/nf-core/configs/master |  | True |
| `config_profile_name` | Institutional config name. | `string` |  |  | True |
| `config_profile_description` | Institutional config description. | `string` |  |  | True |
| `config_profile_contact` | Institutional config contact information. | `string` |  |  | True |
| `config_profile_url` | Institutional config URL link. | `string` |  |  | True |

### **Generic options**

Less common options for the pipeline, typically set in a config file.

| Parameter | Description | Type | Default | Required | Hidden |
|-----------|-----------|-----------|-----------|-----------|-----------|
| `version` | Display version and exit. | `boolean` |  |  | True |
| `publish_dir_mode` | Method used to save pipeline results to output directory. <details><summary>Help</summary><small>The Nextflow `publishDir` option specifies which intermediate files should be saved to the output directory. This option tells the pipeline what method should be used to move these files. See [Nextflow docs](https://www.nextflow.io/docs/latest/process.html#publishdir) for details.</small></details>| `string` | copy |  | True |
| `lean_output` | Do not copy intermediate files to output directory. | `boolean` |  |  | False |
| `email_on_fail` | Email address for completion summary, only when pipeline fails. <details><summary>Help</summary><small>An email address to send a summary email to when the pipeline is completed - ONLY sent if the pipeline does not exit successfully.</small></details>| `string` |  |  | True |
| `plaintext_email` | Send plain-text email instead of HTML. | `boolean` |  |  | True |
| `max_multiqc_email_size` | File size limit when attaching MultiQC reports to summary emails. | `string` | 25.MB |  | True |
| `monochrome_logs` | Do not use coloured log outputs. | `boolean` |  |  | True |
| `hook_url` | Incoming hook URL for messaging service <details><summary>Help</summary><small>Incoming hook URL for messaging service. Currently, MS Teams and Slack are supported.</small></details>| `string` |  |  | True |
| `multiqc_config` | Custom config file to supply to MultiQC. | `string` |  |  | True |
| `multiqc_logo` | Custom logo file to supply to MultiQC. File name must also be set in the MultiQC config file | `string` |  |  | True |
| `multiqc_methods_description` | Custom MultiQC yaml file containing HTML including a methods description. | `string` |  |  |  |
| `validate_params` | Boolean whether to validate parameters against the schema at runtime | `boolean` | True |  | True |
| `pipelines_testdata_base_path` | Base URL or local path to location of pipeline test dataset files | `string` | None |  | True |
| `trace_report_suffix` | Suffix to add to the trace report filename. Default is the date and time in the format yyyy-MM-dd\_HH-mm-ss. | `string` |  |  | True |
