import { Results } from '../../projects/metis-ui/src/app/_models/results';
import {
  PluginStatus,
  PluginType,
  TaskState,
  WorkflowExecution,
  WorkflowStatus
} from '../../projects/metis-ui/src/app/_models/workflow-execution';

export const workflowExecutions: Results<WorkflowExecution> = {
  results: [
    {
      id: '5bf2db489f7dd000084d4cc4',
      datasetId: '58',
      workflowStatus: WorkflowStatus.FAILED,
      ecloudDatasetId: 'fa07e945-48c4-4547-8929-6fde4055a403',
      workflowPriority: 0,
      cancelling: false,
      createdDate: '2018-11-19T15:48:24.665Z',
      startedDate: '2018-11-19T15:48:24.810Z',
      updatedDate: '2018-11-19T15:49:07.452Z',
      finishedDate: undefined,
      metisPlugins: [
        {
          pluginType: PluginType.OAIPMH_HARVEST,
          id: '5bf2db489f7dd000084d4cbc-OAIPMH_HARVEST',
          pluginStatus: PluginStatus.FINISHED,
          startedDate: '2018-11-19T15:48:24.810Z',
          updatedDate: '2018-11-19T15:48:46.222Z',
          finishedDate: '2018-11-19T15:48:46.243Z',
          externalTaskId: '-7126549942357373798',
          executionProgress: {
            expectedRecords: 760,
            processedRecords: 760,
            progressPercentage: 100,
            errors: 0,
            status: TaskState.PROCESSED
          },
          pluginMetadata: {
            pluginType: PluginType.OAIPMH_HARVEST,
            mocked: false,
            enabled: true,
            url: 'https://oai-pmh.eanadev.org/oai',
            metadataFormat: 'edm',
            setSpec: '2021006'
          },
          topologyName: 'oai_harvest'
        },
        {
          pluginType: PluginType.VALIDATION_EXTERNAL,
          id: '5bf2db489f7dd000084d4cbd-VALIDATION_EXTERNAL',
          pluginStatus: PluginStatus.FINISHED,
          startedDate: '2018-11-19T15:48:46.256Z',
          updatedDate: '2018-11-19T15:49:01.935Z',
          finishedDate: '2018-11-19T15:49:01.946Z',
          externalTaskId: '-7851899970126527630',
          executionProgress: {
            expectedRecords: 760,
            processedRecords: 760,
            progressPercentage: 100,
            errors: 760,
            status: TaskState.PROCESSED
          },
          pluginMetadata: {
            pluginType: 'VALIDATION_EXTERNAL',
            mocked: false,
            enabled: true
          },
          topologyName: 'validation'
        },
        {
          pluginType: PluginType.TRANSFORMATION,
          id: '5bf2db489f7dd000084d4cbe-TRANSFORMATION',
          pluginStatus: PluginStatus.FAILED,
          startedDate: '2018-11-19T15:49:01.956Z',
          updatedDate: '2018-11-19T15:49:07.452Z',
          finishedDate: undefined,
          externalTaskId: '2850425267034800327',
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: TaskState.DROPPED
          },
          pluginMetadata: {
            pluginType: PluginType.TRANSFORMATION,
            mocked: false,
            enabled: true,
            customXslt: false
          },
          topologyName: 'xslt_transform'
        },
        {
          pluginType: PluginType.VALIDATION_INTERNAL,
          id: '5bf2db489f7dd000084d4cbf-VALIDATION_INTERNAL',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: undefined,
          updatedDate: undefined,
          finishedDate: undefined,
          externalTaskId: undefined,
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: undefined
          },
          pluginMetadata: {
            pluginType: PluginType.VALIDATION_INTERNAL,
            mocked: false,
            enabled: true
          },
          topologyName: 'validation'
        },
        {
          pluginType: PluginType.NORMALIZATION,
          id: '5bf2db489f7dd000084d4cc0-NORMALIZATION',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: undefined,
          updatedDate: undefined,
          finishedDate: undefined,
          externalTaskId: undefined,
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: undefined
          },
          pluginMetadata: {
            pluginType: 'NORMALIZATION',
            mocked: false,
            enabled: true
          },
          topologyName: 'normalization'
        },
        {
          pluginType: PluginType.ENRICHMENT,
          id: '5bf2db489f7dd000084d4cc1-ENRICHMENT',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: undefined,
          updatedDate: undefined,
          finishedDate: undefined,
          externalTaskId: undefined,
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: undefined
          },
          pluginMetadata: {
            pluginType: PluginType.ENRICHMENT,
            mocked: false,
            enabled: true
          },
          topologyName: 'enrichment'
        },
        {
          pluginType: PluginType.MEDIA_PROCESS,
          id: '5bf2db489f7dd000084d4cc2-MEDIA_PROCESS',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: undefined,
          updatedDate: undefined,
          finishedDate: undefined,
          externalTaskId: undefined,
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: undefined
          },
          pluginMetadata: {
            pluginType: PluginType.MEDIA_PROCESS,
            mocked: false,
            enabled: true
          },
          topologyName: 'media_process'
        },
        {
          pluginType: PluginType.PREVIEW,
          id: '5bf2db489f7dd000084d4cc3-PREVIEW',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: undefined,
          updatedDate: undefined,
          finishedDate: undefined,
          externalTaskId: undefined,
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: undefined
          },
          pluginMetadata: {
            pluginType: PluginType.PREVIEW,
            mocked: false,
            enabled: true
          },
          topologyName: 'indexer'
        }
      ]
    },
    {
      id: '5bf2d6ac9f7dd000084d4cbb',
      datasetId: '58',
      workflowStatus: WorkflowStatus.CANCELLED,
      cancelledBy: '1482250000003948001',
      ecloudDatasetId: 'fa07e945-48c4-4547-8929-6fde4055a403',
      workflowPriority: 0,
      cancelling: false,
      createdDate: '2018-11-19T15:28:44.179Z',
      startedDate: '2018-11-19T15:28:44.288Z',
      updatedDate: '2018-11-19T15:29:06.238Z',
      finishedDate: undefined,
      metisPlugins: [
        {
          pluginType: PluginType.OAIPMH_HARVEST,
          id: '5bf2d6ac9f7dd000084d4cb9-OAIPMH_HARVEST',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: '2018-11-19T15:28:44.288Z',
          updatedDate: '2018-11-19T15:29:06.238Z',
          finishedDate: undefined,
          externalTaskId: '7263327147583816636',
          executionProgress: {
            expectedRecords: 760,
            processedRecords: 300,
            progressPercentage: 39,
            errors: 0,
            status: TaskState.DROPPED
          },
          pluginMetadata: {
            pluginType: PluginType.OAIPMH_HARVEST,
            mocked: false,
            enabled: true,
            url: 'https://oai-pmh.eanadev.org/oai',
            metadataFormat: 'edm',
            setSpec: '2021006'
          },
          topologyName: 'oai_harvest'
        },
        {
          pluginType: PluginType.VALIDATION_EXTERNAL,
          id: '5bf2d6ac9f7dd000084d4cba-VALIDATION_EXTERNAL',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: undefined,
          updatedDate: undefined,
          finishedDate: undefined,
          externalTaskId: undefined,
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: undefined
          },
          pluginMetadata: {
            pluginType: PluginType.VALIDATION_EXTERNAL,
            mocked: false,
            enabled: true
          },
          topologyName: 'validation'
        }
      ]
    },
    {
      id: '5bf27dfc4bbc6c0008c0f269',
      datasetId: '58',
      workflowStatus: WorkflowStatus.FINISHED,
      ecloudDatasetId: 'fa07e945-48c4-4547-8929-6fde4055a403',
      workflowPriority: 0,
      cancelling: false,
      createdDate: '2018-11-19T09:10:20.151Z',
      startedDate: '2018-11-19T09:10:20.175Z',
      updatedDate: '2018-11-19T09:11:06.555Z',
      finishedDate: '2018-11-19T09:11:06.564Z',
      metisPlugins: [
        {
          pluginType: PluginType.OAIPMH_HARVEST,
          id: '5bf27dfc4bbc6c0008c0f267-OAIPMH_HARVEST',
          pluginStatus: PluginStatus.FINISHED,
          startedDate: '2018-11-19T09:10:20.175Z',
          updatedDate: '2018-11-19T09:10:50.859Z',
          finishedDate: '2018-11-19T09:10:50.864Z',
          externalTaskId: '4480402470550914525',
          executionProgress: {
            expectedRecords: 760,
            processedRecords: 760,
            progressPercentage: 100,
            errors: 0,
            status: TaskState.PROCESSED
          },
          pluginMetadata: {
            pluginType: PluginType.OAIPMH_HARVEST,
            mocked: false,
            enabled: true,
            url: 'https://oai-pmh.eanadev.org/oai',
            metadataFormat: 'edm',
            setSpec: '2021006'
          },
          topologyName: 'oai_harvest'
        },
        {
          pluginType: PluginType.VALIDATION_EXTERNAL,
          id: '5bf27dfc4bbc6c0008c0f268-VALIDATION_EXTERNAL',
          pluginStatus: PluginStatus.FINISHED,
          startedDate: '2018-11-19T09:10:50.873Z',
          updatedDate: '2018-11-19T09:11:06.555Z',
          finishedDate: '2018-11-19T09:11:06.564Z',
          externalTaskId: '-3184946032335434203',
          executionProgress: {
            expectedRecords: 760,
            processedRecords: 760,
            progressPercentage: 100,
            errors: 760,
            status: TaskState.PROCESSED
          },
          pluginMetadata: {
            pluginType: PluginType.VALIDATION_EXTERNAL,
            mocked: false,
            enabled: true
          },
          topologyName: 'validation'
        }
      ]
    },
    {
      id: '5bf27ce44bbc6c0008c0f25f',
      datasetId: '58',
      workflowStatus: WorkflowStatus.CANCELLED,
      ecloudDatasetId: 'fa07e945-48c4-4547-8929-6fde4055a403',
      workflowPriority: 0,
      cancelling: false,
      createdDate: '2018-11-19T09:05:40.844Z',
      startedDate: '2018-11-19T09:05:40.910Z',
      updatedDate: '2018-11-19T09:05:51.987Z',
      finishedDate: undefined,
      metisPlugins: [
        {
          pluginType: PluginType.OAIPMH_HARVEST,
          id: '5bf27ce44bbc6c0008c0f25d-OAIPMH_HARVEST',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: '2018-11-19T09:05:40.910Z',
          updatedDate: '2018-11-19T09:05:51.987Z',
          finishedDate: undefined,
          externalTaskId: '-5975372731849357466',
          executionProgress: {
            expectedRecords: 760,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: TaskState.DROPPED
          },
          pluginMetadata: {
            pluginType: PluginType.OAIPMH_HARVEST,
            mocked: false,
            enabled: true,
            url: 'https://oai-pmh.eanadev.org/oai',
            metadataFormat: 'edm',
            setSpec: '2021006'
          },
          topologyName: 'oai_harvest'
        },
        {
          pluginType: PluginType.VALIDATION_EXTERNAL,
          id: '5bf27ce44bbc6c0008c0f25e-VALIDATION_EXTERNAL',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: undefined,
          updatedDate: undefined,
          finishedDate: undefined,
          externalTaskId: undefined,
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: undefined
          },
          pluginMetadata: {
            pluginType: PluginType.VALIDATION_EXTERNAL,
            mocked: false,
            enabled: true
          },
          topologyName: 'validation'
        }
      ]
    },
    {
      id: '5bebea4a4bbc6c0008c0cce1',
      datasetId: '58',
      workflowStatus: WorkflowStatus.FAILED,
      ecloudDatasetId: 'fa07e945-48c4-4547-8929-6fde4055a403',
      workflowPriority: 0,
      cancelling: false,
      createdDate: '2018-11-14T09:26:34.718Z',
      startedDate: '2018-11-14T09:26:34.846Z',
      updatedDate: '2018-11-14T09:27:16.673Z',
      finishedDate: undefined,
      metisPlugins: [
        {
          pluginType: PluginType.OAIPMH_HARVEST,
          id: '5bebea4a4bbc6c0008c0ccd8-OAIPMH_HARVEST',
          pluginStatus: PluginStatus.FINISHED,
          startedDate: '2018-11-14T09:26:34.846Z',
          updatedDate: '2018-11-14T09:26:55.714Z',
          finishedDate: '2018-11-14T09:26:55.718Z',
          externalTaskId: '-8787568004595497503',
          executionProgress: {
            expectedRecords: 760,
            processedRecords: 760,
            progressPercentage: 100,
            errors: 0,
            status: TaskState.PROCESSED
          },
          pluginMetadata: {
            pluginType: PluginType.OAIPMH_HARVEST,
            mocked: false,
            enabled: true,
            url: 'https://oai-pmh.eanadev.org/oai',
            metadataFormat: 'edm',
            setSpec: '2021006'
          },
          topologyName: 'oai_harvest'
        },
        {
          pluginType: PluginType.VALIDATION_EXTERNAL,
          id: '5bebea4a4bbc6c0008c0ccd9-VALIDATION_EXTERNAL',
          pluginStatus: PluginStatus.FINISHED,
          startedDate: '2018-11-14T09:26:55.729Z',
          updatedDate: '2018-11-14T09:27:11.244Z',
          finishedDate: '2018-11-14T09:27:11.248Z',
          externalTaskId: '5489024161574699493',
          executionProgress: {
            expectedRecords: 760,
            processedRecords: 760,
            progressPercentage: 100,
            errors: 760,
            status: TaskState.PROCESSED
          },
          pluginMetadata: {
            pluginType: PluginType.VALIDATION_EXTERNAL,
            mocked: false,
            enabled: true
          },
          topologyName: 'validation'
        },
        {
          pluginType: PluginType.TRANSFORMATION,
          id: '5bebea4a4bbc6c0008c0ccda-TRANSFORMATION',
          pluginStatus: PluginStatus.FAILED,
          startedDate: '2018-11-14T09:27:11.257Z',
          updatedDate: '2018-11-14T09:27:16.673Z',
          finishedDate: undefined,
          externalTaskId: '261431629346917503',
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: TaskState.DROPPED
          },
          pluginMetadata: {
            pluginType: PluginType.TRANSFORMATION,
            mocked: false,
            enabled: true,
            customXslt: false
          },
          topologyName: 'xslt_transform'
        },
        {
          pluginType: PluginType.VALIDATION_INTERNAL,
          id: '5bebea4a4bbc6c0008c0ccdb-VALIDATION_INTERNAL',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: undefined,
          updatedDate: undefined,
          finishedDate: undefined,
          externalTaskId: undefined,
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: undefined
          },
          pluginMetadata: {
            pluginType: PluginType.VALIDATION_INTERNAL,
            mocked: false,
            enabled: true
          },
          topologyName: 'validation'
        },
        {
          pluginType: PluginType.NORMALIZATION,
          id: '5bebea4a4bbc6c0008c0ccdc-NORMALIZATION',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: undefined,
          updatedDate: undefined,
          finishedDate: undefined,
          externalTaskId: undefined,
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: undefined
          },
          pluginMetadata: {
            pluginType: PluginType.NORMALIZATION,
            mocked: false,
            enabled: true
          },
          topologyName: 'normalization'
        },
        {
          pluginType: PluginType.ENRICHMENT,
          id: '5bebea4a4bbc6c0008c0ccdd-ENRICHMENT',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: undefined,
          updatedDate: undefined,
          finishedDate: undefined,
          externalTaskId: undefined,
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: undefined
          },
          pluginMetadata: {
            pluginType: PluginType.ENRICHMENT,
            mocked: false,
            enabled: true
          },
          topologyName: 'enrichment'
        },
        {
          pluginType: PluginType.MEDIA_PROCESS,
          id: '5bebea4a4bbc6c0008c0ccde-MEDIA_PROCESS',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: undefined,
          updatedDate: undefined,
          finishedDate: undefined,
          externalTaskId: undefined,
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: undefined
          },
          pluginMetadata: {
            pluginType: PluginType.MEDIA_PROCESS,
            mocked: false,
            enabled: true
          },
          topologyName: 'media_process'
        },
        {
          pluginType: PluginType.PREVIEW,
          id: '5bebea4a4bbc6c0008c0ccdf-PREVIEW',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: undefined,
          updatedDate: undefined,
          finishedDate: undefined,
          externalTaskId: undefined,
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: undefined
          },
          pluginMetadata: {
            pluginType: PluginType.PREVIEW,
            mocked: false,
            enabled: true
          },
          topologyName: 'indexer'
        },
        {
          pluginType: PluginType.PUBLISH,
          id: '5bebea4a4bbc6c0008c0cce0-PUBLISH',
          pluginStatus: PluginStatus.CANCELLED,
          startedDate: undefined,
          updatedDate: undefined,
          finishedDate: undefined,
          externalTaskId: undefined,
          executionProgress: {
            expectedRecords: 0,
            processedRecords: 0,
            progressPercentage: 0,
            errors: 0,
            status: undefined
          },
          pluginMetadata: {
            pluginType: PluginType.PUBLISH,
            mocked: false,
            enabled: true
          },
          topologyName: 'indexer'
        }
      ]
    }
  ],
  listSize: 5,
  nextPage: -1
};
