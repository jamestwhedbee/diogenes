Search.setIndex({envversion:46,filenames:["diogenes","diogenes.display","diogenes.grid_search","diogenes.modify","diogenes.read","featuture_gen_tut","getting_started","index","modules","notebooks/README","notebooks/array_emitter","notebooks/display","notebooks/grid_search","notebooks/modify","notebooks/read","user_guide/array_emitter","user_guide/display","user_guide/grid_search","user_guide/index","user_guide/modify","user_guide/read","user_guide/utils"],objects:{"":{diogenes:[0,0,0,"-"]},"diogenes.array_emitter":{ArrayEmitter:[0,1,1,""]},"diogenes.array_emitter.ArrayEmitter":{emit_M:[0,3,1,""],get_query:[0,3,1,""],get_rg_from_csv:[0,3,1,""],get_rg_from_sql:[0,3,1,""],select_rows_in_M:[0,3,1,""],set_aggregation:[0,3,1,""],set_default_aggregation:[0,3,1,""],set_interval:[0,3,1,""],subset_over:[0,3,1,""]},"diogenes.display":{display:[1,0,0,"-"]},"diogenes.display.display":{Report:[1,1,1,""],ReportError:[1,6,1,""],crosstab:[1,2,1,""],describe_cols:[1,2,1,""],feature_pairs_in_rf:[1,2,1,""],feature_pairs_in_tree:[1,2,1,""],get_roc_auc:[1,2,1,""],get_top_features:[1,2,1,""],plot_box_plot:[1,2,1,""],plot_correlation_matrix:[1,2,1,""],plot_correlation_scatter_plot:[1,2,1,""],plot_kernel_density:[1,2,1,""],plot_on_timeline:[1,2,1,""],plot_prec_recall:[1,2,1,""],plot_roc:[1,2,1,""],plot_simple_histogram:[1,2,1,""],pprint_sa:[1,2,1,""]},"diogenes.display.display.Report":{add_fig:[1,3,1,""],add_graph_for_best:[1,3,1,""],add_graph_for_best_prec_recall:[1,3,1,""],add_graph_for_best_roc:[1,3,1,""],add_heading:[1,3,1,""],add_legend:[1,3,1,""],add_subreport:[1,3,1,""],add_summary_graph:[1,3,1,""],add_summary_graph_average_score:[1,3,1,""],add_summary_graph_roc_auc:[1,3,1,""],add_table:[1,3,1,""],add_text:[1,3,1,""],get_report_path:[1,3,1,""],to_pdf:[1,3,1,""]},"diogenes.grid_search":{experiment:[2,0,0,"-"],partition_iterator:[2,0,0,"-"],standard_clfs:[2,0,0,"-"],subset:[2,0,0,"-"]},"diogenes.grid_search.experiment":{Experiment:[2,1,1,""],Run:[2,1,1,""],Trial:[2,1,1,""]},"diogenes.grid_search.experiment.Experiment":{average_score:[2,3,1,""],csv_header:[2,5,1,""],has_run:[2,3,1,""],iterate_over_dimension:[2,3,1,""],make_csv:[2,3,1,""],make_report:[2,3,1,""],roc_auc:[2,3,1,""],run:[2,3,1,""],slice_by_best_score:[2,3,1,""],slice_on_dimension:[2,3,1,""],trials:[2,4,1,""]},"diogenes.grid_search.experiment.Run":{M:[2,4,1,""],M_test:[2,4,1,""],clf:[2,4,1,""],col_names:[2,4,1,""],csv_header:[2,5,1,""],csv_row:[2,3,1,""],cv_note:[2,4,1,""],f1_score:[2,3,1,""],prec_recall_curve:[2,3,1,""],precision_at_thresholds:[2,3,1,""],roc_auc:[2,3,1,""],roc_curve:[2,3,1,""],score:[2,3,1,""],sorted_top_feat_importance:[2,3,1,""],sub_col_inds:[2,4,1,""],sub_col_names:[2,4,1,""],subset_note:[2,4,1,""],test_indices:[2,4,1,""],train_indices:[2,4,1,""],y:[2,4,1,""],y_test:[2,4,1,""]},"diogenes.grid_search.experiment.Trial":{M:[2,4,1,""],average_score:[2,3,1,""],clf:[2,4,1,""],clf_params:[2,4,1,""],col_names:[2,4,1,""],csv_header:[2,5,1,""],csv_rows:[2,3,1,""],cv:[2,4,1,""],cv_params:[2,4,1,""],has_run:[2,3,1,""],median_run:[2,3,1,""],prec_recall_curve:[2,3,1,""],roc_auc:[2,3,1,""],roc_curve:[2,3,1,""],run:[2,3,1,""],runs:[2,4,1,""],runs_flattened:[2,3,1,""],subset:[2,4,1,""],subset_params:[2,4,1,""],y:[2,4,1,""]},"diogenes.grid_search.partition_iterator":{NoCV:[2,1,1,""],SlidingWindowIdx:[2,1,1,""],SlidingWindowValue:[2,1,1,""]},"diogenes.grid_search.partition_iterator.SlidingWindowIdx":{cv_note:[2,3,1,""]},"diogenes.grid_search.partition_iterator.SlidingWindowValue":{cv_note:[2,3,1,""]},"diogenes.grid_search.standard_clfs":{rg_clfs:[2,4,1,""],std_clfs:[2,4,1,""]},"diogenes.grid_search.subset":{BaseSubsetIter:[2,1,1,""],SubsetNoSubset:[2,1,1,""],SubsetRandomRowsActualDistribution:[2,1,1,""],SubsetRandomRowsEvenDistribution:[2,1,1,""],SubsetSweepNumRows:[2,1,1,""],SubsetSweepVaryStratification:[2,1,1,""]},"diogenes.modify":{modify:[3,0,0,"-"]},"diogenes.modify.modify":{choose_cols_where:[3,2,1,""],choose_rows_where:[3,2,1,""],col_fewer_than_n_nonzero:[3,2,1,""],col_has_lt_threshold_unique_values:[3,2,1,""],col_random:[3,2,1,""],col_val_eq:[3,2,1,""],col_val_eq_any:[3,2,1,""],combine_cols:[3,2,1,""],distance_from_point:[3,2,1,""],generate_bin:[3,2,1,""],label_encode:[3,2,1,""],normalize:[3,2,1,""],remove_cols_where:[3,2,1,""],remove_rows_where:[3,2,1,""],replace_missing_vals:[3,2,1,""],row_is_outlier:[3,2,1,""],row_is_within_region:[3,2,1,""],row_val_between:[3,2,1,""],row_val_eq:[3,2,1,""],row_val_gt:[3,2,1,""],row_val_lt:[3,2,1,""],where_all_are_true:[3,2,1,""]},"diogenes.read":{read:[4,0,0,"-"]},"diogenes.read.read":{SQLConnection:[4,1,1,""],SQLError:[4,6,1,""],connect_sql:[4,2,1,""],open_csv:[4,2,1,""],open_csv_url:[4,2,1,""]},"diogenes.read.read.SQLConnection":{execute:[4,3,1,""]},"diogenes.utils":{append_cols:[0,2,1,""],cast_list_of_list_to_sa:[0,2,1,""],cast_np_sa_to_nd:[0,2,1,""],check_arguments:[0,2,1,""],check_col:[0,2,1,""],check_col_names:[0,2,1,""],check_consistent:[0,2,1,""],check_sa:[0,2,1,""],convert_to_sa:[0,2,1,""],csv_to_sql:[0,2,1,""],dist_less_than:[0,2,1,""],distance:[0,2,1,""],fix_pandas_datetimes:[0,2,1,""],invert_dictionary:[0,2,1,""],is_nd:[0,2,1,""],is_not_a_time:[0,2,1,""],is_sa:[0,2,1,""],join:[0,2,1,""],np_dtype_is_homogeneous:[0,2,1,""],open_csv_as_sa:[0,2,1,""],remove_cols:[0,2,1,""],sa_from_cols:[0,2,1,""],stack_rows:[0,2,1,""],str_to_time:[0,2,1,""],to_unix_time:[0,2,1,""],transpose_dict_of_lists:[0,2,1,""],utf_to_ascii:[0,2,1,""]},diogenes:{array_emitter:[0,0,0,"-"],display:[1,0,0,"-"],grid_search:[2,0,0,"-"],modify:[3,0,0,"-"],read:[4,0,0,"-"],utils:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","function","Python function"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","staticmethod","Python static method"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:function","3":"py:method","4":"py:attribute","5":"py:staticmethod","6":"py:exception"},terms:{"01t00":[13,19],"01t18":[13,19],"0th":1,"1st":1,"20t19":[13,19],"31t19":[13,19],"41c4e61d755c":[],"___":6,"____":6,"_____":6,"__call__":0,"_edgecolor":[6,9],"_partitioniter":2,"boolean":[0,1,2,3],"case":[3,11,12,16,17],"class":[0,1,2,3,4,6,9,10,12,13,15,17,19],"default":[0,1,11,16],"final":[11,13,16,19],"float":[0,1,2,3,13,19],"function":[0,1,2,3,4,6,11,13,16,19],"import":[0,1,2,5,6,9,10,11,12,13,14,15,16,17,19,20],"int":[0,1,2,3,14,20],"long":1,"new":[0,5,13,19],"null":0,"return":[0,1,2,3,4,5,6,9,11,12,13,14,16,17,19,20],"static":2,"throw":0,"true":[0,1,2,3,4,5,11,12,13,16,17,19],"try":[2,6,9],"while":[0,12,17],about:[0,2,11,12,16,17],abov:[3,5,12,17],absenc:[0,10,15],absens:[10,15],accept:0,access:[12,17],accesstyp:[13,19],accomd:[],accord:0,accross:2,acid:[6,9,11,14,16,20],across:[0,1,2,12,17],action:[13,19],activ:[13,19],actual:2,add:[0,1,11,13,16,19],add_fig:[1,11,16],add_figur:[],add_graph_for_best:1,add_graph_for_best_prec_recal:1,add_graph_for_best_roc:1,add_head:[1,11,16],add_legend:1,add_subreport:1,add_summary_graph:1,add_summary_graph_average_scor:1,add_summary_graph_roc_auc:1,add_tabl:[1,11,16],add_text:[1,11,16],addit:[0,12,17],addition:0,address:[13,19],adher:[0,3,14,20],adict:0,affect:[3,12,17],against:[1,3,12,17],aggreag:0,aggreg:[0,12,17],aggret:0,ahead:[13,19],alcohol:[6,9,11,14,16,20],algo:5,algorithm:0,all:[0,1,2,3,5,11,12,13,16,17,19],all_scor:[12,17],allei:[13,19],allow:5,allow_cach:4,allow_pgres_copy_optim:4,along:[13,19],alreadi:[0,2,13,19],also:[0,2,4,11,12,13,16,17,19],alter:[11,16],alwai:[3,4],among:0,anaconda:[6,9,12,17],analysi:[11,16],analyz:[13,19],ani:[0,13,14,19,20],ann:[14,20],anoth:1,anyth:2,api:[13,19],appear:[0,1,2],append:[0,12,17],append_col:[0,12,13,17,19],appli:3,applic:[0,12,17],approxim:0,arbitrari:[0,4],arbitrarili:0,archiv:[0,6,9,11,12,14,16,17,20],area:[1,2,12,13,17,19],arg:0,argument:[0,2,3,12,13,17,19],argument_nam:0,around:[12,17],arrai:5,arrang:[6,9,11,16],arrayemitt:[0,10,15],arraygener:0,arrrai:0,ascii:0,aspx:0,assign:[0,1,3,4],associ:[0,1,12,17],assum:[0,4,13,19],attempt:[12,17],attribut:1,avail:[6,11,12,16,17],averag:[0,1,2,6,9,11,12,16,17],average_scor:[1,2,6,9,12,17],avg:0,avoid:0,bar:[12,17],base:[0,1,2,4,6,9,12,13,17,19],baseestim:[1,2],basesubsetit:2,basi:0,basic:[],bear:0,becaus:0,becom:0,been:[0,2,11,13,16,19],befor:[11,13,16,19],begin:[0,2,12,17],behavior:4,belong:[3,12,17],below:[0,1,12,17],best:[1,2,6,9,12,17,18],best_scor:[6,9],best_trial:[6,9],between:[0,1,3,6,9,14,20],bill:[14,20],bin:[3,5,13,19],binari:[2,3,6,9,11,12,13,16,17,19],bit:[11,16],block:[1,11,16],blog:[0,1],bool:[0,1,2,3,4],both:[2,3,12,17],bottom:5,boundari:[3,5],box:1,build:[11,16],c_name:5,cach:4,calcul:[0,13,19],call:[0,1,3],callabl:0,camp:[],can:[0,1,2,3,6,9,11,12,13,14,16,17,19,20],caputr:[],cartesian:[2,12,17],cast:0,cast_list_of_list_to_sa:0,cast_np_sa_to_nd:[0,11,16],categori:[3,13,19],ceas:0,cecil:[14,20],cell:[1,3],center:[12,17],certain:[0,3],chang:3,charact:[0,4],check:[0,3,5],check_argu:0,check_col:0,check_col_nam:0,check_consist:0,check_sa:0,chicago:[13,19],chlorid:[6,9,11,14,16,20],choose_cols_wher:[0,3,13,19],choose_rows_wher:[3,5,13,19],chorid:[],chosen:[0,3],circl:0,citric:[6,9,11,14,16,20],cityofchicago:[13,19],claim:[13,19],class_1:2,class_1_param_1:2,class_1_param_1_value_1:2,class_1_param_1_value_2:2,class_1_param_1_value_n:2,class_1_param_2:2,class_1_param_2_value_1:2,class_1_param_2_value_2:2,class_1_param_2_value_n:2,class_1_param_m:2,class_1_param_m_value_1:2,class_1_param_m_value_2:2,class_1_param_m_value_n:2,class_2:2,class_2_param_1:2,class_2_param_1_value_1:2,class_2_param_1_value_2:2,class_2_param_1_value_n:2,class_2_param_2:2,class_2_param_2_value_1:2,class_2_param_2_value_2:2,class_2_param_2_value_n:2,class_2_param_m:2,class_2_param_m_value_1:2,class_2_param_m_value_2:2,class_2_param_m_value_n:2,class_:2,class_l:2,class_l_param_1:2,class_l_param_1_value_1:2,class_l_param_1_value_2:2,class_l_param_1_value_n:2,class_l_param_2:2,class_l_param_2_value_1:2,class_l_param_2_value_2:2,class_l_param_2_value_n:2,class_l_param_m:2,class_l_param_m_value_1:2,class_l_param_m_value_2:2,class_l_param_m_value_n:2,class_specifi:2,class_x:2,class_x_param:2,class_x_param_:2,class_x_param_y_value_:2,classif:[5,11,12,16,17],classifi:[],clear:[12,17],clf:[0,1,2,6,9,11,12,13,16,17,19],clf_param:[2,6,9,12,13,17,19],cloud:[13,19],code:[6,13,19],col1:1,col1_valu:[11,16],col2:1,col:[0,1,3,4],col_argument_nam:0,col_fewer_than_n_nonzero:3,col_has_lt_threshold_unique_valu:3,col_label:1,col_nam:[0,1,2,3,4,5,13,19],col_names_argument_nam:0,col_names_if_convert:0,col_names_if_m_convert:0,col_random:3,col_val_eq:3,col_val_eq_ani:[3,13,19],collect:[0,1,2,6,9,13,19],column:[0,1,2,3,4,5,6,9,11,12,13,16,17,19],com:[0,5,6],combin:3,combine_col:[3,13,19],command:[],common:18,commun:[13,19],comparison:[6,9],complet:[13,19],compris:2,con_str:4,concaten:1,condit:0,configur:[2,12,17],confus:[11,16],conn:[0,14,20],conn_str:[0,4],connect:[0,4,14,20],connect_sql:[4,14,20],consecut:[11,16],consequ:[0,2],consid:[0,3,6,9,12,17],consist:[0,2],consol:[0,1],constant:[0,2,3,12,13,17,19],constraint:0,construct:[0,2],contain:[0,1,2,3,12,17],conveni:[11,16],convent:5,convergencewarn:[6,9,12,17],convers:0,convert:[0,4,11,13,16,19],convert_list_of_list_to_sa:5,convert_to_sa:0,convert_to_unix_tim:0,cooccur:1,cooccurr:1,cookbook:0,coordin:[3,13,19],copi:0,core:4,correct:0,correl:[1,6,9,13,19],correspond:[0,1,2,4,13,19],could:[0,2,13,19],count:[0,6,9,11,16],counter:[1,13,19],craft:5,craigfr:0,creat:[0,1,2,3,4,12,13,14,17,19,20],creation:[1,13,19],criteria:[0,13,19],cross:[1,2,12,17,18],cross_valid:[2,6,9,12,13,17,19],crosstab:[1,11,16],csv:[],csv_file_path:0,csv_header:2,csv_in:[14,20],csv_path:0,csv_row:2,csv_to_sql:0,current:[0,2,13,19],curv:[1,2,6,9,11,16],custom:2,cv_note:[2,12,17],cv_param:[2,6,9,12,13,17,19],data2:[13,19],data:5,data_with_zero:[13,19],databas:[],datafram:0,dataset:[5,11,12,16,17],datatyp:0,date:[0,13,19],date_text:0,datetim:[0,4],datetime64:[0,13,19],dbapi:[4,14,20],deal:21,deaper:6,debri:[13,19],decid:0,decis:[11,16],decisiontreeclassif:1,def:[5,13,19],defin:[0,12,13,17,19],delimit:[0,4,6,9,11,12,14,16,17,20],densiti:[1,6,9,11,14,16,20],depth:[1,11,16],describ:1,describe_col:[1,6,9,11,16],design:[12,17,18],detail:[10,11,12,13,15,16,17,19,21],deterimin:1,determin:[0,2],dev:[3,6,9,11,16],deviat:3,diab:5,dict:[0,1,2,3],dictionari:[0,3,13,19],did:[11,16],differ:[0,2,5,6,9,11,12,13,14,16,17,19,20],dig:6,digest:[10,15],dimens:[2,12,17],dimension:[0,11,16],dioxid:[6,9,11,14,16,20],direct:[0,2,3],discret:[13,19],discuss:[12,17],displai:[],display_sample_report:[11,16],dist_bin:[13,19],dist_from_cloud_g:[13,19],dist_less_than:0,distanc:[0,13,19],distance_from_point:[3,13,19],distinct:[12,17],distribut:[2,11,12,16,17],district:[13,19],divid:18,doc:[0,4,6,9],document:[],doe:[0,2,12,14,17,20],doesn:[11,16],dol:0,don:[13,19],doubl:[],download:[13,19],downtown:[13,19],draw:2,drop:0,dssg:[6,9],dtime_col:0,dtype:[0,6,9,11,13,14,16,19,20],dup:[13,19],duplic:[13,19],dure:[0,12,13,17,19],each:[0,1,2,3,4,12,13,17,19],earli:[6,9,12,17],earth:0,easi:5,easier:18,edu:[6,9,11,12,14,16,17,20],either:[0,1,2,3,13,14,19,20],element:[0,1,2,3,12,17],elementwis:[6,9],els:2,elucid:[0,12,17],emit_m:[0,10,15],emitt:[],emploi:[13,19],encapsul:2,encod:[13,19],end:[0,2,12,17,21],end_time_col:0,end_year:[0,10,15],engin:[0,4],engini:[],english_gpa:[0,10,15],enhanc:6,ensembl:[0,1,2,5,6,9,11,12,13,16,17,19],entir:[1,2,12,17],entri:[0,1,13,19],epoch:0,equal:[0,2,3,12,13,17,19],equalival:0,equival:[0,12,17],equlival:0,error:[0,1],estim:[1,12,17],etc:1,even:3,everi:[0,1,3,13,19],exampl:[],excel:[12,17],except:[0,1,4,12,17],exec_str:4,execut:[2,4,11,14,16,20],exhaust:[12,17],exist:[0,3,13,19],exp:[1,6,9,11,12,13,16,17,19],expand:0,expanding_train:[2,12,17],expect:[0,2,3],experi:[],explain:[13,19],expos:[12,17],express:3,extens:2,extern:[4,14,18,20],extra:2,extract:[11,16],f1_score:[2,12,17],face:[6,9],fail:[6,9],fall:0,fals:[0,2,3,4,6,9,11,12,16,17],far:3,feat_nam:[11,16],featur:[],feature_col:0,feature_importances_:1,feature_nam:0,feature_pairs_in_rf:[1,11,16],feature_pairs_in_tre:1,few:[13,19],fewer:3,field:[0,4],fifth:0,fig:[1,6,9,12,17],figur:[1,2,11,16],file:[],file_nam:2,filenam:2,fill:0,fin:0,find:[0,1,2,6,9,12,13,17,18,19],first:[0,1,2,3,4,11,12,13,16,17,19],fit:[1,2,3,11,12,16,17],fitted_classifi:[11,16],five:0,fix:[6,9,11,14,16,20],fix_pandas_datetim:0,flat:[12,17],focu:[],fold:[12,17],folder:[],follow:[0,1,3,12,17],forest:[0,1,2,6,9,11,12,13,16,17,19],forev:0,form:0,format:[0,1,2,3,4,10,12,14,15,17,18,20],formula:0,forward:2,fourth:0,frame:0,free:[6,9,11,14,16,20],frequenc:[1,2,12,17],frequent:[13,19],from:[0,1,2,3,4,5,6,9,10,11,12,13,14,15,16,17,18,19,20],from_url:1,front:1,frow:5,fucntion:[],full_report_path:[11,16],func:[0,3,13,19],func_nam:1,futur:[6,9],futurewarn:[6,9],gate:[13,19],gender:3,gener:[],generate_bin:[3,13,19],get:[],get_queri:0,get_report_path:1,get_rg_from_csv:[0,10,15],get_rg_from_sql:0,get_roc_auc:1,get_top_featur:[1,11,16],git:6,github:[1,6],gitignor:[],give:[0,1,2,11,16],given:[0,2,12,17],gpa:0,grad_year:0,graph:[1,12,17],great:[0,11,16],greater:3,grid:[],grid_search:[],grid_search_sample_report:[12,17],ground:1,guid:[],guide_col_nam:[2,12,17],had:[0,13,19],happen:[12,17],has_run:2,hasattr:0,hash:0,have:[0,2,3,11,12,13,16,17,19],haversin:0,head:[1,11,16],header:[0,2,4],heigh:5,height:[5,11,12,16,17],her:0,here:[1,6,11,12,16,17],heterogen:0,higher:0,highli:[13,19],histogram:1,homogen:[0,1,2],how:[0,2,3,5,11,12,16,17],html:[0,1,3,4,11,12,16,17],http:[0,1,3,4,6,9,11,12,13,14,16,17,19,20],hyper:[11,12,16,17],ident:[0,4],identifi:0,iff:[0,1,2],ifram:[11,12,16,17],ignor:[0,3,12,17],immedi:1,implement:[0,4],imput:[13,19],inc_valu:[2,12,17],includ:[0,2,12,17],inclus:0,incorpor:1,increment:[0,2],index:[2,7,12,17],indic:[],info:2,inform:[0,2,12,17],init:2,initi:[0,2,4],initiaz:2,inlin:[6,9,11,12,16,17],inner:[0,1,12,17],input:0,insert:[14,20],insid:1,instanc:[13,14,19,20],instead:[0,1,6,9,12,17],integ:[3,13,19],intend:4,interest:[13,19],interfac:6,internet:[11,16],interpret:[0,4],interv:0,interval_expand:0,interval_inc_valu:0,interval_test_window_s:0,interval_test_window_start:0,interval_train_window_s:0,interval_train_window_start:0,invalidate_cach:4,invert_dictionari:0,investig:[],involv:2,ipython:[11,12,16,17],is_nd:0,is_not_a_tim:0,is_sa:0,isn:[12,17],isnan:[13,19],issu:0,item:[0,13,19],iter:[],iterate_over_dimens:2,iteritem:[6,9,12,17],jakevdp:1,job:[13,19],join:0,just:[0,2],keep:[12,17],kei:[0,1,3,6,9,12,13,17,19],kernel:[1,12,17],kfold:[2,6,9,12,13,17,19],kilomet:0,kind:[11,12,16,17],label:[0,1,2,6,9,11,12,13,16,17,19],label_col:0,label_encod:[3,13,19],labelencod:3,labels_test:[11,16],labl:5,lambada:5,lambd:3,lambda:[0,6,9,12,17],lambda_1:3,lambda_2:3,lambda_arguments_1:3,lambda_arguments_2:3,lambda_arguments_n:3,lambda_col_1:3,lambda_col_2:3,lambda_col_n:3,lambda_n:3,largest:0,last:[],lat1:0,lat2:0,lat_1:0,lat_2:0,lat_col:3,lat_origin:3,later:[11,12,13,16,17,19],latitud:[13,19],learn:[3,6,9,10,11,12,13,14,15,16,17,18,19,20],least:0,leav:[13,19],left:0,left_on:0,legend:[1,12,17],length:0,less:[0,3],let:[12,13,17,19],level:[1,11,12,16,17],lib:[6,9,12,17],librari:[6,14,20],like:[0,6,9,11,12,13,16,17,19],limit:[11,16],line:[0,4],linear:[1,12,17],list:[0,1,2,3,4,12,17],liter:2,live:0,lng_col:3,lng_origin:3,load_diabet:5,local:[],locat:[13,19],log2:[6,9,11,12,16,17],log:0,logical_or:[13,19],lon1:0,lon2:0,lon_1:0,lon_2:0,longest:0,longitud:[13,19],look:[2,6,11,12,13,16,17,19],lot:[13,19],m_argument_nam:0,m_new:5,m_test:[2,11,16],m_with_year:[12,17],mab8:[13,19],machin:[6,9,11,12,14,16,17,18,20],made:[13,19],mai:0,make:[],make_csv:[2,12,17],make_report:[2,6,9,12,17],manipul:[13,18,19],map:3,markers:[12,17],match:[0,2,3,13,19],math_gpa:[0,10,15],matplotlib:[1,2,6,9,11,12,16,17],matrix:[0,5],max:[0,6,9,11,13,16,19],max_depth:[6,9,12,17],max_featur:[6,9,11,12,16,17],max_it:[6,9,12,17],maximum:[6,9,11,16],mean:[0,3,6,9,11,16],measur:[1,12,17],median:[2,3],median_run:2,merg:0,method:[0,3,11,12,16,17],metric:[1,12,17],might:[0,2],min:[0,13,19],minimum:[6,9,11,16],minmaxscal:[6,9,12,17],miscilan:18,miss:[3,13,19],missing_v:3,missint:3,modifi:[],more:[0,2,11,12,14,16,17,20],most:[0,11,12,13,14,16,17,19,20],most_common:[13,19],most_frequ:[3,13,19],mostli:[18,21],move:2,msdn:0,much:2,multipl:[0,12,17],must:[0,1,3,13,19],my_:[],my_experi:[],my_storag:[],n_col:0,n_estim:[2,6,9,11,12,16,17],n_featur:2,n_fold:[12,17],n_job:[6,9,12,17],n_row:0,n_subset:[2,12,17],name:[0,1,2,3,4,6,9,11,13,14,16,19,20],nameerror:[],nan:[0,3,10,13,15,19],nat:0,ndarrai:[0,1,2,3,4],necessari:2,need:[],neg:1,new_column_nam:5,nice:1,nocv:2,node:1,none:[0,1,2,3,4,13,19],nonstructur:0,nonzero:3,normal:[3,13,19],not_a_tim:0,note:[0,3,6,9,12,13,17,19],notebook:[6,9],notic:[0,12,13,17,19],now:[11,13,16,19],np_dtype_is_homogen:0,nth:0,num_bin:3,num_row:2,number:[0,1,2,3,11,12,13,16,17,19,21],numpi:[0,1,2,3,4,5,6,9,11,12,13,14,16,17,18,19,20],object:[0,1,2,4,13,19],occur:[0,1,11,16],occurr:[11,16],odd:21,offer:[11,12,16,17],often:6,omit:[0,13,19],onc:[13,19],onli:[0,2,3,13,19],open:[10,13,14,15,19,20],open_csv:[4,14,20],open_csv_as_sa:0,open_csv_url:[4,6,9,11,12,13,14,16,17,19,20],oper:[0,2,3,13,19],option:[0,1],optional_keys_take_list:0,order:[0,3],org:[0,1,3,4,13,19],organ:[2,11,12,16,17],origin:3,other:[],otherwis:[0,2],our:[0,5,6,9,11,12,13,16,17,19],out:[1,11,13,16,19],outer:[0,1,2,12,17],outlier:3,output:[1,2],outsid:[0,13,19],over:[0,2,3,12,17,18],overal:[11,16],overriden:4,own:[0,5,12,17],page:7,pair:[1,3,11,16],panda:[0,6],param:[0,2],paramet:[0,1,2,3,4,11,12,16,17],parenthes:0,park:0,parkwai:[13,19],parkway_in_ward_10:[13,19],parse_datetim:[0,4,13,19],part:18,particular:[0,1,2,12,17],partit:[],partition_iter:[],pass:[0,3,12,14,17,20],path:[0,1,2,4],pdf:[],pdfkit:[1,6],pedagog:[13,19],per:[0,12,17],peramet:0,perform:[],permiss:0,pertain:0,pick:[0,2,3],pip:6,plot:[1,6,9,11,12,16,17],plot_box_plot:[1,11,16],plot_correlation_matrix:[1,6,9,11,16],plot_correlation_scatter_plot:[1,11,16],plot_kernel_dens:[1,11,16],plot_on_timelin:1,plot_prec_recal:[1,11,16],plot_roc:[1,11,16],plot_simple_histogram:[1,5,11,16],plotlib:6,plt:[12,17],point:[0,1,3,11,13,16,19],polic:[13,19],popul:0,portal:[13,19],portion:[2,12,17],posit:2,possibl:0,postgr:4,pprint_sa:[1,6,9,10,11,15,16],pre:[6,9,12,17],prec:1,prec_recall_curv:[1,2,12,17],prec_recall_fig:[11,16],precis:[1,2,11,12,16,17],precision_at_threshold:2,pred_proba:1,predict:[13,19],predict_proba:[11,16],prefer:[14,18,20],prefix:0,prepar:[12,17],preprocess:3,prevent:[],primari:[12,17],princip:6,print:[1,6,9,11,12,13,14,16,17,19,20],probabl:[13,19],problem:[5,11,16],process:[0,6,9,12,17,18],produc:[2,3,11,16],product:[2,12,17],properti:1,proport:[2,12,17],proportions_posit:2,provid:[0,1,2,3,4,6,10,11,12,13,14,15,16,17,18,19,20,21],pull:[11,16],purpos:[13,19],put:[1,13,19],pydata:0,pypi:1,pyplot:[12,17],python2:[6,9,12,17],python:[],qualiti:[6,9,11,12,14,16,17,20],queri:[0,3,4,14,20],query_threshold:2,question:0,quick:[5,11,16],rais:0,randint:[12,17],random:[1,2,3,11,12,16,17],random_st:[2,11,12,16,17],randomforest:[2,12,17],randomforestclassif:2,randomforestclassifi:[0,1,2,5,6,9,11,12,13,16,17,19],randomforestestim:2,rang:[0,12,17],rank:1,rather:[0,2,12,17],rbf:[12,17],read:[],readabl:[11,16],readi:[13,19],recal:[1,2,11,12,16,17],recarrai:0,recent:[13,19],recommend:[],record:[0,3,13,14,19,20],reexecut:4,reflect:2,regard:1,region:3,rel_0_9:4,relationship:1,remain:[1,2],remote_csv:[14,20],remov:[0,3,6,9,13,19],remove_col:[0,6,9,11,12,13,16,17,19],remove_cols_wher:[3,13,19],remove_rows_wher:[0,3,13,19],repeat:[13,19],replac:[3,13,19],replace_missing_v:[3,13,19],report:[],report_file_nam:[2,12,17],report_path:[1,11,16],reporterror:1,repres:[1,2,3,12,13,17,19],represent:0,request:[13,19],requir:[],required_kei:0,resembl:[14,20],residu:[6,9,11,14,16,20],respect:[2,12,17],rest:[6,9,13,19],result:[0,1,4,11,16],retain:[13,19],return_fit:3,return_report_object:2,revers:[12,17],review:[13,19],rg_clf:2,rg_tabl:0,rg_table_csv:[10,15],right:0,right_on:0,roc:[1,2,6,9,11,12,16,17],roc_auc:[1,2],roc_curv:[1,2,6,9],roc_fig:[11,16],round:[11,16],row:[0,1,2,3,12,13,14,17,19,20],row_is_outli:3,row_is_within_region:3,row_label:1,row_m:0,row_m_col_nam:0,row_m_expand:0,row_m_inc_valu:0,row_m_test_window_s:0,row_m_test_window_start:0,row_m_train_window_s:0,row_m_train_window_start:0,row_val_between:[3,13,19],row_val_eq:[3,13,19],row_val_gt:3,row_val_in:[13,19],row_val_lt:3,run:5,run_0:[12,17],runs_by_subset:[12,17],runs_flatten:[2,12,17],s20:[11,16],sa_from_col:0,sadli:[11,16],sai:[12,17],same:[0,1,2,3,4,12,13,17,19],sampl:[5,10,14,15,20],sample_csv_in:[10,15],sample_csv_text:[14,20],sample_num:[12,17],sample_t:[14,20],saniti:5,save:[11,16],scalar:[6,9],scatter:1,scikit:[3,6,10,12,13,15,17,19],scipi:0,scope:[13,19],score:[1,2,6,9,11,12,16,17],scratch:2,search:[],second:[0,1,2,3,12,17],see:[0,1,3,10,11,12,15,16,17,21],seed:[2,12,17],select:[],select_rows_in_m:0,self:[0,6,9,12,17],semant:0,sens:[0,13,19],sensit:[12,17,18],sent:4,separ:[6,9,11,16],server:4,servic:[13,19],set:[0,2,6,9,11,12,13,16,17,18,19],set_aggreg:0,set_default_aggreg:0,set_interv:[0,10,15],sever:[2,13,18,19],shape:[3,6,9,12,13,17,19],share:0,should:[0,2,3,4],show:[1,5,11,12,16,17],signifi:[0,2,3,12,17],signitutr:5,similar:[0,1,12,13,17,19],similarli:[11,16],simpl:[11,16],simple_cv:5,simpli:[1,12,17],simplifi:6,sinc:[0,13,19],singl:[0,2,3,11,16],site:[6,9,12,17],size:[0,2,12,17],sklearn:[0,1,2,3,5,6,9,11,12,13,16,17,19],slice:2,slice_by_best_scor:2,slice_on_dimens:2,slide:[12,17],slidingwindowidx:[],slidingwindowvalu:[],small:[11,16],smallest:0,solver:[6,9,12,17],some:[0,3,13,19],somebodi:0,someth:[13,19],sort:[1,12,14,17,20],sorted_top_feat_import:2,sorted_trial_with_scor:[12,17],sound:[13,19],sourc:[14,18,20],spacial:3,specif:[2,13,14,19,20],specifi:[0,2,3,12,17],split:[1,2,11,12,16,17],sql:[],sql_result:[14,20],sqlalchemi:[0,4,6,14,20],sqlconnect:[4,14,20],sqlerror:4,sqlite:[14,20],sqrt:[11,12,16,17],src:[11,12,16,17],stabl:[0,3],stack_row:0,stackoverflow:0,standard:[2,3,5,6,9,11,12,16,17],standard_clf:[],standardscal:[6,9,12,17],start:[],start_tim:0,start_time_col:0,start_year:[0,10,15],statement:0,statist:[0,1,6,9,11,13,16,19],statment:5,statu:[13,19],std:3,std_clf:[2,6,9,12,17],stddev:3,still:[13,19],stop:[0,12,17],stop_tim:0,stop_time_col:0,store:[0,4],str:[0,1,2,3,4,6,9],str_to_tim:0,strategi:[3,13,19],stratifi:[12,17],stratifiedkfold:[12,17],street:[13,19],strictli:[14,20],string:[0,2,3,4,13,14,19,20],strip:0,structur:[0,1,2,3,4,5,6,9,11,14,16,18,20,21],student:0,student_id:[0,10,15],stype:0,sub:0,sub_col_ind:2,sub_col_nam:2,subclass:2,subreport:[1,2],subsequ:[1,11,16],subset:[],subset_not:[2,12,17],subset_ov:0,subset_param:[2,6,9,12,13,17,19],subset_s:[2,12,17],subsetnosubset:[2,6,9,12,13,17,19],subsetrandomrowsactualdistribut:[2,12,17],subsetrandomrowsevendistribut:[2,12,17],subsetsweepnumrow:[2,12,17],subsetsweepvarystratif:[2,12,17],subsett:[2,12,17],substitut:3,suffix:0,sugar:[6,9,11,14,16,20],sulfur:[6,9,11,14,16,20],sulphat:[6,9,11,14,16,20],sum:[0,11,13,16,19],summar:[1,2,11,12,16,17,18],summari:[1,6,9,11,12,16,17],summary_stat:[11,16],supervis:2,support:[0,11,16],suppos:0,sure:0,svc:[2,12,17],svm:[6,9,12,17],syntax:[13,19],tabl:[],table1:0,table2:0,table3:0,table_1:0,table_nam:0,take:[0,2,3,12,17],target:5,task:18,templet:6,term:4,termin:[6,9,12,17],test:[0,2,5,11,12,16,17,18],test_end:[12,17],test_equ:5,test_indic:[2,11,12,16,17],test_start:[2,12,17],test_window_s:[2,12,17],text:[1,11,14,16,20],than:[0,2,3,12,17],thei:[0,11,16],them:[2,11,13,16,19],thi:[0,1,2,3,4,5,6,9,11,12,13,16,17,19],thing:[0,12,13,17,19],think:3,third:0,those:[0,1,13,19],three:[12,17],thresh:2,threshold:[0,2,3],thrown:0,time:[0,12,17],timedelta:0,timefram:0,timelin:1,tissu:0,titl:1,tmp_dir:4,to_pdf:[1,11,16],to_unix_tim:0,toler:[13,19],tool:[0,1,11,12,13,14,16,17,18,19,20],top:[1,2,5,11,16],top_featur:[11,16],total:[6,9,11,14,16,20],traceback:[],track:[12,17],train:[0,2,11,12,16,17,18],train_end:[12,17],train_indic:[2,12,17],train_start:[2,12,17],train_window_s:[2,12,17],transform:0,translat:0,transpos:[10,15,18],transpose_dict_of_list:0,tree:[1,11,13,16,19],trend:[12,17],trial:[],trial_0:[12,17],trial_and_scor:[6,9],trials_with_scor:[6,9],truth:1,tupl:[1,2,3],turn:[6,9],tutori:[13,19],twice:4,twist:5,two:[0,1,12,13,17,19],type:[0,1,2,3,4,5,13,19],typelength:0,uci:[6,9,11,12,14,16,17,20],ultim:[3,13,19],under:[1,2,12,17],unicod:0,union:0,uniqu:[0,2,3],unit:0,unit_id_col:0,unix:0,unspecifi:0,upward:[12,17],url:[4,14,20],user:[],user_specifi:0,utf_to_ascii:0,vacant:[13,19],vagu:4,val:[3,13,19],val_col:0,valid:[0,2,12,13,17,18,19],valu:[0,1,2,3,5,10,12,13,14,15,17,19,20],valueerror:0,vari:[2,12,17],variabl:[0,1,13,19],variou:[12,17],vector:[0,1,2],verbos:[0,1,2,6,9,11,12,16,17],veri:[],verifi:0,view:[0,13,19],visual:[1,11,16],volatil:[6,9,11,14,16,20],wai:[0,1,2,11,12,14,16,17,20],want:[0,2,3,5,11,12,13,16,17,19],ward:[13,19],wdiogen:[1,11,16],weak:[12,17],weight:[1,5,11,16],weight_by_depth:1,well:[2,11,12,16,17],were:[11,13,16,19],what:[0,12,13,17,19],when:[0,2,11,12,14,16,17,20],where:[0,1,2,3,4,5,13,19],where_all_are_tru:[0,3,13,19],whether:[0,2,13,19],which:[0,1,2,3,4,5,10,11,12,13,14,15,16,17,19,20],white:[6,9,11,12,14,16,17,20],width:[11,12,16,17],wiki:0,window:[0,2,12,17],wine:[6,9,11,12,14,16,17,20],wine_data:[11,16],winequ:[6,9,11,12,14,16,17,20],wish:0,within:[0,3],without:[0,3,12,17],wkhtmltopdf:6,work:[2,12,17],workflow:6,would:[0,3,13,19],wrap:6,write:[10,14,15,20],xlabel:[12,17],y9h3:[13,19],y_test:2,year:[0,3,12,13,17,19],ylabel:[12,17],you:[0,12,13,17,19],your:[5,6,9,12,17],zar1:[6,9,12,17],zip:[13,19]},titles:["diogenes package","diogenes.display package","diogenes.grid_search package","diogenes.modify package","diogenes.read package","Using Eights for Feature Generation","Getting Started","Welcome to Diogenes&#8217;s documentation!","diogenes","&lt;no title&gt;","The Array Emitter Module","The Display Module","The Grid Search Module","The Modify Module","The Read Module","The Array Emitter Module","The Display Module","The Grid Search Module","User Guide","The Modify Module","The Read Module","The Utils Module"],titleterms:{arrai:[10,15],array_emitt:0,classifi:[11,12,16,17],clean:[13,19],content:[0,1,2,3,4],csv:[14,20],data:[11,16],databas:[14,20],diogen:[0,1,2,3,4,7,8],displai:[1,11,16],document:7,eight:5,emitt:[10,15],examin:[11,16],exampl:6,experi:[2,12,17],explor:[11,16],featur:[5,13,19],file:[14,20],gener:[5,13,19],get:6,grid:[12,17],grid_search:2,guid:18,hyperparamet:[12,17],indic:7,instal:6,introduct:6,iter:[12,17],last:[13,19],local:[14,20],make:[11,16],misc:[],modifi:[3,13,19],modul:[0,1,2,3,4,10,11,12,13,14,15,16,17,19,20,21],next:6,other:6,packag:[0,1,2,3,4,6],partit:[12,17],partition_iter:2,pdf:[11,16],perform:[11,16],place:[13,19],python:6,read:[4,14,20],remot:[14,20],report:[11,12,16,17],requir:6,run:[12,17],search:[12,17],select:[13,19],slidingwindowidx:[12,17],slidingwindowvalu:[12,17],sql:[14,20],standard_clf:2,start:6,step:[6,13,19],submodul:[0,1,2,3,4],subpackag:0,subset:[2,12,17],tabl:7,trial:[12,17],user:18,util:[0,21],welcom:7}})